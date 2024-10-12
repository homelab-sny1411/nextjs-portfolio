import {FaGithub, FaLinkedin} from "react-icons/fa";
import Image from 'next/image';

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen bg-gray-800 flex items-center justify-center">
            <div className="w-2/3 h-96 bg-gray-900 flex rounded-lg shadow-lg overflow-hidden">
                <div className="w-1/2 flex items-center justify-center bg-gray-700">
                    <Image
                        src="/images/matteo-humez-logo.svg"
                        alt="Logo avec initiales MH"
                        width={160}
                        height={160}   // Correspond à la taille 40x40 en remplaçant w-40 h-40
                    />
                </div>

                {/* Section droite: Contact */}
                <div className="w-1/2 p-8 text-white flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-bold">Me contacter</h2>
                    <p className="text-lg">
                        Vous pouvez me contacter via LinkedIn ou consulter mes projets sur GitHub.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-500 transition duration-300"
                        >
                            <FaLinkedin size={30}/>
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-gray-400 transition duration-300"
                        >
                            <FaGithub size={30}/>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
