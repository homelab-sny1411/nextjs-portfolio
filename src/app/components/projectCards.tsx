'use client';

import React, { useState, useEffect} from 'react';
import Image from "next/image";
import {ChevronLeft, ChevronRight, X} from 'lucide-react';

interface Project {
    title: string;
    image: string;
    technologies: string[];
    descriptionHtml: string;
    year: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}


const Modal = ({isOpen, onClose, project, onNext, onPrev, hasNext, hasPrev}: ModalProps) => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) {return;}
            if (e.key === 'ArrowLeft' && hasPrev) {onPrev();}
            if (e.key === 'ArrowRight' && hasNext) {onNext();}
            if (e.key === 'Escape') {onClose();}
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, hasNext, hasPrev, onNext, onPrev, onClose]);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) {return;}

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance && hasNext) {
            onNext();
        }
        if (distance < -minSwipeDistance && hasPrev) {
            onPrev();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    if (!isOpen || !project) {return null;}

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
            <div
                className="relative w-full h-full md:h-auto md:max-w-3xl md:max-h-[85vh] bg-gray-800 md:rounded-lg overflow-hidden md:mx-4"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Bouton fermer */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors md:bg-gray-900/50 md:hover:bg-gray-900/80"
                >
                    <X size={24} />
                </button>

                {/* Contenu scrollable */}
                <div className="h-full overflow-y-auto">
                    {/* Image */}
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 md:from-gray-800 via-transparent to-transparent" />
                    </div>

                    {/* Infos projet */}
                    <div className="p-6 pb-24 md:pb-6">
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                            <span className="text-sm text-gray-400 bg-gray-900 md:bg-gray-700 px-3 py-1 rounded-full ml-3 whitespace-nowrap">
                                {project.year}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-sm px-3 py-1 bg-blue-600 text-white rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="text-gray-300 md:text-gray-200 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.descriptionHtml }} />
                    </div>
                </div>

                {/* Navigation desktop - en bas */}
                <div className="hidden md:flex items-center justify-between p-4 border-t border-gray-700 bg-gray-900/50">
                    <button
                        onClick={onPrev}
                        disabled={!hasPrev}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            hasPrev
                                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        <ChevronLeft size={20} />
                        <span>Précédent</span>
                    </button>
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            hasNext
                                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        <span>Suivant</span>
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Navigation mobile - boutons en bas */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-900 border-t border-gray-800">
                    <button
                        onClick={onPrev}
                        disabled={!hasPrev}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                            hasPrev
                                ? 'bg-gray-800 text-white'
                                : 'bg-gray-800/50 text-gray-600'
                        }`}
                    >
                        <ChevronLeft size={20} />
                        Précédent
                    </button>
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                            hasNext
                                ? 'bg-gray-800 text-white'
                                : 'bg-gray-800/50 text-gray-600'
                        }`}
                    >
                        Suivant
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects: Project[] = [
        {
            title: 'Portfolio',
            image: '/images/background.jpg',
            technologies: ['React', 'Next.js', 'Tailwind CSS'],
            descriptionHtml: `
                <h2 class="text-2xl font-bold mb-4">Portfolio</h2>
                <p class="text-justify">
                    Actuellement, vous êtes en train de visiter ce projet ! <br>
                    Il s'agit d'un site web réalisé avec <strong>React</strong> et <strong>Next.js</strong>.
                    J'utilise également <strong>Tailwind CSS</strong> pour le design. 
                    
                    Ce projet a grandement évolué depuis sa création, initialement, je l'ai réalisé en Laravel (quelle erreur).
                    Puis dans le cadre de mon cours d'écologie dans le numérique. J'ai décidé de le refaire en Next.js.
                    Ceci a pour avantage de réduire radicalement le poids de la page (les images sont par exemple automatiquement compressé).
                    Ce qui permet donc d'un côté de réduire l'empreinte carbone du site et de l'autre d'améliorer la vitesse de chargement.</p>
            `,
            year: '2024'
        },
        {
            title: 'Bingo !',
            image: '/images/projets/bingo.png',
            technologies: ['Java', 'Maven', 'Minecraft', 'PaperMc'],
            descriptionHtml: `
                <h2 class="text-2xl font-bold mb-4">Bingo !</h2>
               <p class="text-justify">
                    Bingo est un jeu de type "Bingo" pour Minecraft. Il a été réalisé en Java avec l'aide de l'API PaperMC.
                    J'ai réalisé ce projet dans simplement pour m'amuser avec mes amis.
                    Ce projet m'a permis de découvrir le développement de plugin pour Minecraft et de m'améliorer en Java.
                    J'ai également appris à utiliser Maven pour gérer les dépendances de mon projet.
                </p>
                <p class="text-justify mt-2.5">
                    Vous pouvez retrouver le code source et plus de détails sur ce projet sur mon GitHub.
                </p>
            `,
            year: '2024'
        },
        {
            title: 'Marathon du web',
            image: '/images/projets/marathon.jpg',
            technologies: ['HTML', 'CSS', 'PHP', 'Laravel'],
            descriptionHtml: `
                <h2 class="text-2xl font-bold mb-4">Marathon du web</h2>
                <p class="text-justify">
                Ce projet est un événement organisé par l'IUT de Lens. Il consiste à développer un site web complet en 33 heures.</p>
                
                <p class="text-justify mt-2.5">
                Pour cela, le département MMI (Métiers du Multimédia et de l'Internet) s'est joint à nous. Nous avons travaillé à quatre sur le backend et eux à cinq sur le frontend. C'était très intéressant, car dans leur formation, ils approfondissent davantage les notions de design, etc., tandis que nous avons plus de notions pour le backend. Nous étions donc complémentaires.
                </p>
                <p class="text-justify mt-2.5">
                    Vous pouvez retrouver le code source et plus de détails sur ce projet sur mon GitHub.
                </p>
            `,
            year: '2023'
        },
        {
            title: 'Serveur Minecraft',
            image: '/images/projets/minecraft.jpg',
            technologies: ['Java', 'Maven', 'Minecraft', 'PaperMc', 'MySQL'],
            descriptionHtml: `
                <h2 class="text-2xl font-bold mb-4">Serveur Minecraft</h2>
                <p class="text-justify">
                Comme on peut le comprendre, j'aime Minecraft. Ce jeu permet de créer ce que l'on souhaite et donc de laisser son imagination décider de ce que l'on va faire.
                </p>
                <p class="text-justify mt-2.5">
                Hors, après plusieurs années à jouer, parfois, on peut se sentir bloqué et dire "oh, ça serait super si telle chose était dans le jeu !". Eh bien, c'est ce que je fais de mon temps libre pour mes amis. Eux me donnent des idées, et moi, je les réalise.
                </p>
                <p class="text-justify mt-2.5">
                Le meilleur exemple que je peux donner est celui d'un serveur que j'ai ouvert début 2023 pendant les vacances afin de faire profiter tous ceux qui avaient envie de jouer des ajouts que j'ai effectués.
                </p>
                <p class="text-justify mt-2.5">
                Vous pouvez retrouver le code source et plus de détails sur ce projet sur mon GitHub. Il y a même une page de
                wiki lié à ce projet écrit par un ami qui explique les ajouts !
                </p>
            `,
            year: '2023-2024'
        },
        {
            title: 'Plus ou moins',
            image: '/images/projets/plus-ou-moins.png',
            technologies: ['C++'],
            descriptionHtml: `
                <h2 class="text-2xl font-bold mb-4">Plus ou moins</h2>
                <p class="text-justify">
                Ce projet est tout simplement une reprise du jeu du juste prix. On lance le programme, l'ordinateur choisi un nombre puis vous devez faire de la proposition pour essayer de deviner le nombre. L'ordinateur vous dit seulement si le nombre est plus grand ou plus petit.
               </p>
                <p class="text-justify mt-2.5">
                Bien que ce projet soit simple, il me tient à cœur, car c'est mon tout premier projet. En effet, je l'ai réalisé lorsque j'étais en 6ᵉ donc en 2015
                </p>
                <p class="text-justify mt-2.5">
                Vous pouvez retrouver le code source et plus de détails sur ce projet sur mon GitHub (même si le code n'est vraiment pas très intéressant pour le coup).
                </p>   
            `,
            year: '2015'
        },
    ];

    const openModal = (index: number) => {
        setCurrentProjectIndex(index);
        setIsModalOpen(true);
    };

    const handleNext = () => {
        if (currentProjectIndex < projects.length - 1) {
            setCurrentProjectIndex(currentProjectIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex(currentProjectIndex - 1);
        }
    };

    return (
        <div id="portfolio" className="min-h-screen bg-gray-900 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors"
                        >
                            <div className="md:flex">
                                <div className="md:w-2/5 relative h-48 md:h-auto">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5 md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h3>
                                            <span className="text-sm text-gray-400 ml-3">{project.year}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => openModal(index)}
                                        className="text-blue-400 hover:text-blue-300 text-sm font-medium self-start"
                                    >
                                        En savoir plus →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={projects[currentProjectIndex]}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={currentProjectIndex < projects.length - 1}
                hasPrev={currentProjectIndex > 0}
            />
        </div>
    );
};

export default Projects;