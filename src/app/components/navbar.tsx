'use client'

import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-6 py-2 rounded-full shadow-lg z-50">
            <ul className="flex space-x-8">
                <li>
                    <Link
                        to="accueil"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        À propos
                    </Link>
                </li>
                <li>
                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75 cursor-pointer">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
