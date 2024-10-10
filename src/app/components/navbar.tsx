'use client'

import { Link } from 'react-scroll';
import {useEffect, useState} from "react";

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <nav className="fixed top-0 w-full bg-gray-900 text-white p-4">
            <ul className="flex space-x-4 justify-center">
                <li><Link to="accueil" smooth={true} duration={500}>Accueil</Link></li>
                <li><Link to="about" smooth={true} duration={500}>À propos</Link></li>
                <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
