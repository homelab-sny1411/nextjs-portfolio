import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-3/4 h-3/4 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-6 lg:space-y-0">
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
                    <p className="text-lg">
                        Je travaille actuellement chez <a href={"https://waigeo.fr/"} target={"_blank"} className="underline hover:underline-offset-4 transition-colors duration-300">Waigéo</a>, passionné par le développement informatique et
                        notamment par les dernières technologies. J&#39;aime apprendre de nouvelles choses et relever des défis.
                    </p>
                    <br/>
                    <p className="text-lg">
                        Au sein de Waigéo, j&#39;ai eu l&#39;opportunité de travailler sur une variété de technologies, notamment <strong>nuxt.js</strong>, <strong>express.js</strong>, <strong>node.js</strong>, <strong>socket.io</strong>, <strong>symfony</strong>, et bien d&#39;autres.
                        Cette expérience m&#39;a permis de développer mes compétences en développement web et de contribuer à des projets innovants.
                    </p>
                    <br/>
                    <p className="text-lg">
                        En dehors de mon travail, je consacre beaucoup de temps à mes projets personnels, principalement autour de <strong>Next.js</strong>. Je m&#39;intéresse également à tout ce qui touche aux réseaux et à l&#39;infrastructure : j&#39;expérimente la mise en place de <strong>Home Assistant</strong>, l&#39;automatisation de déploiements via CI/CD avec <strong>GitHub Runner</strong> en local, la gestion de <strong>registres Docker</strong> privés, ainsi que le déploiement d&#39;applications avec <strong>Nomad</strong> et <strong>Vault</strong>.
                        Ces expériences me permettent de renforcer mes compétences en architecture, en déploiement et en orchestration, et me passionnent par la manière dont elles allient développement et infrastructure.
                    </p>
                </div>

                <div className="lg:w-1/2 p-6">
                    <h3 className="text-3xl font-semibold mb-6">Mon parcours</h3>
                    <ul className="space-y-6">
                        {/* BUT informatique */}
                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="p-2 w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 bg-white  aspect-square rounded-full flex items-center justify-center overflow-hidden">
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

                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="p-2 w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 bg-white  aspect-square rounded-full flex items-center justify-center overflow-hidden">
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
                                <h4 className="text-2xl font-semibold">Stage chez Waigéo</h4>
                                <p className="text-lg">Avril 2024 - Juin 2024</p>
                            </div>
                        </li>

                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="p-2 w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 bg-white  aspect-square rounded-full flex items-center justify-center overflow-hidden">
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
                                <h4 className="text-2xl font-semibold">Alternance chez Waigéo</h4>
                                <p className="text-lg">Septembre 2024 - Août 2025</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-1/4 flex justify-center">
                                <div className="p-2 w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 bg-white  aspect-square rounded-full flex items-center justify-center overflow-hidden">
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
                                <h4 className="text-2xl font-semibold">Développeur web chez Waigéo</h4>
                                <p className="text-lg">Septembre 2025 - Actuellement</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
