'use client';

import { useState } from 'react';
import Modal from "@/app/components/modal";
import Image from "next/image";

interface Project {
    title: string;
    image: string;
    technologies: string[];
    descriptionHtml: string; // Description HTML spécifique à chaque projet
}

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    // Liste des projets avec leur description HTML
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
            `
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
            `
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
            `
        },
        {
            title: 'Serveur Minecraft',
            image: '/images/projets/minecraft.jpg',
            technologies: ['Java', 'Maven', 'Minecraft', 'PaperMc', 'MySQL'],
            descriptionHtml: `
                <h2 class="text-2xl font-bold mb-4">Portfolio</h2>
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
            `
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
            `
        },
    ];

    const openModal = (project: Project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-wrap justify-center gap-8 text-white p-4">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[calc(40%-1rem)] lg:w-[calc(30%-1rem)]"
                >
                    <Image src={project.image} alt={project.title}
                    width={400} height={200} className="rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">
                        Technologies : {project.technologies.join(', ')}
                    </p>
                    <button
                        onClick={() => openModal(project)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        En savoir plus
                    </button>
                </div>
            ))}

            {currentProject && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    htmlContent={currentProject.descriptionHtml}
                />
            )}
        </div>
    );
};

export default Projects;
