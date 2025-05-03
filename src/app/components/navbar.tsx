'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="hidden md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 md:bg-black/70 md:backdrop-blur-md md:text-white md:px-6 md:py-2 md:rounded-full md:shadow-lg md:z-50 md:block">
            <ul className="flex space-x-8">
                <li>
                    <Link href="#accueil" className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75">
                        À propos
                    </Link>
                </li>
                <li>
                    <Link href="#portfolio" className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-gray-300 transition-colors duration-300 hover:opacity-75">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
