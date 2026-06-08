import React from 'react';
import Image from 'next/image';
import ScrollIndicator from "@/app/components/scrollIndicator";

const Accueil = () => {
    return (
        <section id="accueil" className="relative h-dvh flex items-center justify-center">
            <Image
                src="/images/background.jpg"
                alt="Background"
                fill
                quality={85}
                priority
                className="z-[-1] object-cover"
            />
            <div className="absolute inset-0 bg-[#0b0b0f]/70" />
            <div className="relative z-10 px-6 text-center">
                <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-bold tracking-tight leading-[0.9] text-white select-none">
                    Mattéo<br />Humez
                </h1>
            </div>
            <ScrollIndicator />
        </section>
    );
};

export default Accueil;
