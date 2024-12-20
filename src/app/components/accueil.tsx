import React from 'react';
import Image from 'next/image';
import ScrollIndicator from "@/app/components/scrollIndicator";

const Accueil = () => {
    return (
        <section id="accueil" className="min-h-screen flex flex-col items-center justify-center text-white">
            <Image
                src="/images/background.jpg" // Chemin de l'image
                alt="Background"
                layout="fill" // Remplit toute la section
                objectFit="cover" // Comme un background-size: cover
                quality={85} // Ajuste la qualité de l'image (75 est un bon compromis)
                priority={true} // Charge l'image en priorité
                className="z-[-1]" // Place l'image en arrière-plan
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold">Mattéo Humez</h1>
                <p className="text-xl">Bienvenue sur mon portfolio !</p>
            </div>
            <ScrollIndicator />
        </section>
    );
};

export default Accueil;