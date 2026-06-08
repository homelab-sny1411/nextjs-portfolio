import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Footer from "@/app/components/footer";

const Contact = () => {
    return (
        <div id="contact" className="min-h-dvh bg-[#0f0f14] flex flex-col justify-between">
            <div className="flex-grow flex items-center justify-center px-6 py-24">
                <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Logo */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-32 h-32 bg-[#1a1a24] rounded-2xl flex items-center justify-center">
                            <Image
                                src="/images/matteo-humez-logo.svg"
                                alt="Initiales MH"
                                width={72}
                                height={72}
                            />
                        </div>
                    </div>

                    {/* Liens */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-3">Me contacter</h2>
                        <p className="text-[#9ca3af] mb-8 leading-relaxed">
                            Disponible sur LinkedIn ou consultable sur GitHub.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-6">
                            <a
                                href="https://www.linkedin.com/in/matteohumez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-[#9ca3af] hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                <FaLinkedin size={18} />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/sny1411"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-[#9ca3af] hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
