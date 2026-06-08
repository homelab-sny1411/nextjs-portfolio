'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Github } from 'lucide-react';

interface Project {
    title: string;
    image: string;
    technologies: string[];
    descriptionHtml: string;
    year: string;
    githubUrl?: string;
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

const Modal = ({ isOpen, onClose, project, onNext, onPrev, hasNext, hasPrev }: ModalProps) => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) { return; }
            if (e.key === 'ArrowLeft' && hasPrev) { onPrev(); }
            if (e.key === 'ArrowRight' && hasNext) { onNext(); }
            if (e.key === 'Escape') { onClose(); }
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
        if (!touchStart || !touchEnd) { return; }
        const distance = touchStart - touchEnd;
        if (distance > 50 && hasNext) { onNext(); }
        if (distance < -50 && hasPrev) { onPrev(); }
        setTouchStart(0);
        setTouchEnd(0);
    };

    if (!isOpen || !project) { return null; }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
            <div
                className="relative w-full h-full md:h-auto md:max-w-2xl md:max-h-[85vh] bg-[#111118] md:rounded-xl overflow-hidden md:mx-4 border border-white/8"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="h-full overflow-y-auto">
                    <div className="relative w-full h-56 md:h-72">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
                    </div>

                    <div className="p-6 pb-24 md:pb-6">
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-2xl font-bold text-white tracking-tight">{project.title}</h2>
                            <div className="flex items-center gap-3 ml-3 shrink-0">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#6b7280] hover:text-white transition-colors"
                                        aria-label="Voir sur GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                )}
                                <span className="text-sm text-[#6b7280] bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                                    {project.year}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div
                            className="text-[#9ca3af] leading-relaxed prose prose-invert max-w-none prose-headings:hidden"
                            dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
                        />
                    </div>
                </div>

                {/* Navigation desktop */}
                <div className="hidden md:flex items-center justify-between p-4 border-t border-white/8 bg-[#0f0f14]">
                    <button
                        onClick={onPrev}
                        disabled={!hasPrev}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${hasPrev ? 'text-white hover:bg-white/8' : 'text-[#374151] cursor-not-allowed'}`}
                    >
                        <ChevronLeft size={16} />
                        Précédent
                    </button>
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${hasNext ? 'text-white hover:bg-white/8' : 'text-[#374151] cursor-not-allowed'}`}
                    >
                        Suivant
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Navigation mobile */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-[#0f0f14] border-t border-white/8">
                    <button
                        onClick={onPrev}
                        disabled={!hasPrev}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors ${hasPrev ? 'text-white' : 'text-[#374151] cursor-not-allowed'}`}
                    >
                        <ChevronLeft size={16} />
                        Précédent
                    </button>
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors ${hasNext ? 'text-white' : 'text-[#374151] cursor-not-allowed'}`}
                    >
                        Suivant
                        <ChevronRight size={16} />
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
            githubUrl: 'https://github.com/homelab-sny1411/nextjs-portfolio',
            descriptionHtml: `
                <p class="text-justify">
                    Actuellement, vous êtes en train de visiter ce projet !
                    Il s'agit d'un site web réalisé avec <strong>React</strong> et <strong>Next.js</strong>,
                    stylé avec <strong>Tailwind CSS</strong>.
                </p>
                <p class="text-justify mt-3">
                    Ce projet a grandement évolué depuis sa création : initialement en Laravel, puis refait en Next.js
                    dans le cadre d'un cours sur l'écologie numérique. Les images sont automatiquement compressées,
                    ce qui réduit l'empreinte carbone et améliore le temps de chargement.
                </p>
            `,
            year: '2024',
        },
        {
            title: 'SnyTools',
            image: '/images/projets/snytools.png',
            technologies: ['JavaScript', 'WebAssembly', 'Docker', 'PWA'],
            descriptionHtml: `
                <p class="text-justify">
                    J'en avais marre d'utiliser des sites douteux pour fusionner des PDFs ou convertir des images.
                    J'ai donc créé mes propres outils.
                </p>
                <p class="text-justify mt-3">
                    SnyTools, c'est une application web avec des outils pratiques : un fusionneur de PDFs,
                    un convertisseur d'images, et d'autres à venir. Tout fonctionne sur l'appareil :
                    zéro upload, zéro données collectées.
                </p>
                <p class="text-justify mt-3">
                    Techniquement : WebAssembly pour la performance, Service Worker pour le mode hors ligne,
                    déployé avec Docker.
                </p>
            `,
            year: '2024',
        },
        {
            title: 'Bingo !',
            image: '/images/projets/bingo.png',
            technologies: ['Java', 'Maven', 'Minecraft', 'PaperMC'],
            githubUrl: 'https://github.com/sny1411',
            descriptionHtml: `
                <p class="text-justify">
                    Un plugin Minecraft de type Bingo réalisé en Java avec l'API PaperMC,
                    pour jouer avec des amis.
                </p>
                <p class="text-justify mt-3">
                    Ce projet m'a permis de découvrir le développement de plugins Minecraft
                    et de renforcer mes compétences en Java et Maven.
                </p>
            `,
            year: '2024',
        },
        {
            title: 'Marathon du web',
            image: '/images/projets/marathon.jpg',
            technologies: ['HTML', 'CSS', 'PHP', 'Laravel'],
            descriptionHtml: `
                <p class="text-justify">
                    Un événement organisé par l'IUT de Lens : développer un site web complet en 33 heures.
                </p>
                <p class="text-justify mt-3">
                    Travail en équipe avec des étudiants MMI pour le frontend et nous pour le backend.
                    Une expérience complémentaire très enrichissante.
                </p>
            `,
            year: '2023',
        },
        {
            title: 'Serveur Minecraft',
            image: '/images/projets/minecraft.jpg',
            technologies: ['Java', 'Maven', 'Minecraft', 'PaperMC', 'MySQL'],
            githubUrl: 'https://github.com/sny1411',
            descriptionHtml: `
                <p class="text-justify">
                    Des plugins Minecraft personnalisés développés pour mes amis : ils imaginent,
                    je construis. Le meilleur exemple est un serveur ouvert début 2023, avec des ajouts
                    documentés dans un wiki écrit par un ami.
                </p>
            `,
            year: '2023–2024',
        },
        {
            title: 'Plus ou moins',
            image: '/images/projets/plus-ou-moins.png',
            technologies: ['C++'],
            descriptionHtml: `
                <p class="text-justify">
                    Une reprise du jeu du juste prix : l'ordinateur choisit un nombre,
                    vous proposez jusqu'à trouver.
                </p>
                <p class="text-justify mt-3">
                    Ce projet me tient à cœur : c'est mon tout premier projet, réalisé en 6ᵉ en 2015.
                </p>
            `,
            year: '2015',
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
        <div id="portfolio" className="min-h-screen bg-[#0b0b0f] py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white tracking-tight mb-12">Projets</h2>
                <div className="space-y-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-[#111118] border border-white/6 rounded-xl overflow-hidden hover:border-white/14 transition-colors duration-200"
                        >
                            <div className="md:flex">
                                <div className="md:w-2/5 relative h-44 md:h-auto shrink-0">
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
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
                                            <div className="flex items-center gap-2.5 ml-3 shrink-0">
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="text-[#6b7280] hover:text-white transition-colors"
                                                        aria-label="Voir sur GitHub"
                                                    >
                                                        <Github size={16} />
                                                    </a>
                                                )}
                                                <span className="text-xs text-[#6b7280]">{project.year}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-0.5 bg-white/5 text-[#9ca3af] rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => openModal(index)}
                                        className="text-sm text-accent hover:text-white transition-colors duration-200 self-start"
                                    >
                                        En savoir plus
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
