import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-3/4 h-3/4 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-6 lg:space-y-0">
                {/* Partie gauche: Description personnelle */}
                <div className="lg:w-1/2 p-8">
                    <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
                    <p className="text-lg">
                        Je suis actuellement en 3ème année de BUT Informatique, passionné par le développement informatique et
                        notamment par les dernières technologies. J&#39;aime apprendre de nouvelles choses et relever des défis.
                    </p>
                </div>

                {/* Partie droite: Graphique du parcours */}
                <div className="lg:w-1/2 p-8">
                    <h3 className="text-3xl font-semibold mb-6">Mon parcours</h3>
                    <ul className="space-y-6">
                        {/* BUT informatique */}
                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/images/iut-lens-logo.svg"
                                        alt="IUT Lens Logo"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="w-3/4 pl-4">
                                <h4 className="text-2xl font-semibold">BUT Informatique</h4>
                                <p className="text-lg">2022 - 2025</p>
                            </div>
                        </li>

                        {/* Stage chez Waigeo */}
                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/images/waigeo-logo.svg"
                                        alt="Waigeo Logo"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="w-3/4 pl-4">
                                <h4 className="text-2xl font-semibold">Stage chez Waigeo</h4>
                                <p className="text-lg">Avril 2023 - Juin 2023</p>
                            </div>
                        </li>

                        {/* Alternance chez Waigeo */}
                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/images/waigeo-logo.svg"
                                        alt="Waigeo Logo"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="w-3/4 pl-4">
                                <h4 className="text-2xl font-semibold">Alternance chez Waigeo</h4>
                                <p className="text-lg">Septembre 2023 - Actuellement</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
