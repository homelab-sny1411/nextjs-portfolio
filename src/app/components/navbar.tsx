'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop — pill flottante */}
            <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-8 bg-[#0b0b0f]/80 backdrop-blur-md border border-white/10 px-8 py-2.5 rounded-full text-sm text-[#a1a1aa]">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className="hover:text-white transition-colors duration-200"
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Mobile — bouton hamburger */}
            <button
                onClick={() => setOpen(true)}
                aria-label="Ouvrir le menu"
                className="fixed top-4 right-4 z-50 md:hidden p-2.5 bg-[#0b0b0f]/80 backdrop-blur-md border border-white/10 rounded-lg text-white"
            >
                <Menu size={20} />
            </button>

            {/* Mobile — overlay menu */}
            {open && (
                <div className="fixed inset-0 z-50 md:hidden bg-[#0b0b0f]/96 backdrop-blur-sm flex flex-col">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Fermer le menu"
                            className="p-2.5 text-[#a1a1aa] hover:text-white transition-colors"
                        >
                            <X size={22} />
                        </button>
                    </div>
                    <nav className="flex-1 flex items-center justify-center">
                        <ul className="flex flex-col items-center gap-10">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className="text-3xl font-semibold text-white tracking-tight"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
