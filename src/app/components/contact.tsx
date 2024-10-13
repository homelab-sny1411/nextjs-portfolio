import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Footer from "@/app/components/footer";

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen bg-gray-800 flex flex-col justify-between">
            {/* Contenu principal */}
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-4xl h-auto lg:h-96 bg-gray-900 flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden">
                    {/* Section gauche: Logo */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-700">
                        <Image
                            src="/images/matteo-humez-logo.svg"
                            alt="Logo avec initiales MH"
                            width={160}
                            height={160}
                        />
                    </div>

                    <div className="w-full lg:w-1/2 p-8 text-white flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl font-bold">Me contacter</h2>
                        <p className="text-lg">
                            Vous pouvez me contacter via LinkedIn ou consulter mes projets sur GitHub.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/in/matteohumez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:text-blue-500 transition duration-300"
                            >
                                <FaLinkedin size={30} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/sny1411"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:text-gray-400 transition duration-300"
                            >
                                <FaGithub size={30} />
                                <span>GitHub</span>
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
