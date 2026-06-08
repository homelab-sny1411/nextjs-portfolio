import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Portfolio — Mattéo Humez",
    description: "Portfolio de Mattéo Humez, développeur web.",
    metadataBase: new URL('https://www.matteo-humez.fr'),
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={inter.variable}>
            <body className="overscroll-none bg-[#0b0b0f] text-[#f0f0f2] antialiased">
                {children}
            </body>
        </html>
    );
}
