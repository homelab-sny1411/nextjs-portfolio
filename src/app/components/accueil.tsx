import React from 'react';
import Image from 'next/image';
import ScrollIndicator from "@/app/components/scrollIndicator";

const Accueil = () => {
    return (
        <section id="accueil" className="h-dvh flex flex-col items-center justify-center text-white">
            <Image
                src="/images/background.jpg"
                alt="Background"
                fill
                quality={85}
                priority
                className="z-[-1] object-cover"
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