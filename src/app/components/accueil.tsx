import React from 'react';

const Accueil = () => {
    return (
        <section id="accueil" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
            <p className="text-xl">Je suis un développeur fullstack spécialisé en Next.js</p>
        </section>
    );
};

export default Accueil;