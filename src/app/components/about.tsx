import Image from 'next/image';

const timeline = [
    {
        logo: '/images/waigeo-logo.svg',
        alt: 'Waigéo',
        title: 'Développeur web — Waigéo',
        period: 'Sept. 2025 → Aujourd\'hui',
    },
    {
        logo: '/images/waigeo-logo.svg',
        alt: 'Waigéo',
        title: 'Alternance — Waigéo',
        period: 'Sept. 2024 → Août 2025',
    },
    {
        logo: '/images/waigeo-logo.svg',
        alt: 'Waigéo',
        title: 'Stage — Waigéo',
        period: 'Avr. 2024 → Juin 2024',
    },
    {
        logo: '/images/iut-lens-logo.svg',
        alt: 'IUT Lens',
        title: 'BUT Informatique — IUT Lens',
        period: '2022 → 2025',
    },
];

const About = () => {
    return (
        <section id="about" className="min-h-dvh bg-[#0f0f14] text-white flex items-center justify-center py-24 px-6">
            <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Texte */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 tracking-tight">À propos</h2>
                    <div className="space-y-5 text-[#9ca3af] leading-relaxed">
                        <p>
                            Je travaille actuellement chez{' '}
                            <a
                                href="https://waigeo.fr/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white underline underline-offset-4 hover:text-accent transition-colors duration-200"
                            >
                                Waigéo
                            </a>
                            , passionné par le développement informatique et les dernières technologies.
                        </p>
                        <p>
                            Au sein de Waigéo, j&apos;ai eu l&apos;opportunité de travailler sur{' '}
                            <strong className="text-white font-medium">nuxt.js</strong>,{' '}
                            <strong className="text-white font-medium">express.js</strong>,{' '}
                            <strong className="text-white font-medium">node.js</strong>,{' '}
                            <strong className="text-white font-medium">socket.io</strong> et{' '}
                            <strong className="text-white font-medium">symfony</strong>.
                        </p>
                        <p>
                            En dehors du travail, j&apos;explore l&apos;infrastructure :{' '}
                            <strong className="text-white font-medium">Home Assistant</strong>,{' '}
                            CI/CD avec <strong className="text-white font-medium">GitHub Runner</strong>,{' '}
                            registres <strong className="text-white font-medium">Docker</strong> privés,{' '}
                            déploiement avec <strong className="text-white font-medium">Nomad</strong> et{' '}
                            <strong className="text-white font-medium">Vault</strong>.
                        </p>
                    </div>
                </div>

                {/* Parcours */}
                <div>
                    <h3 className="text-2xl font-semibold mb-10 tracking-tight">Parcours</h3>
                    <ul className="space-y-7">
                        {timeline.map((item, i) => (
                            <li key={i} className="flex items-center gap-5">
                                <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={item.logo}
                                        alt={item.alt}
                                        width={30}
                                        height={30}
                                        className="object-contain w-auto h-auto"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-white leading-snug">{item.title}</p>
                                    <p className="text-sm text-[#6b7280] mt-0.5">{item.period}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;
