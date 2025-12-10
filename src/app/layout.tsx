import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Portfolio - Humez Mattéo",
    description: "Portfolio de Humez Mattéo",
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
        <html lang="fr" data-scroll-behavior="smooth">
        <body className="overscroll-none bg-gray-900">
        {children}
        </body>
        </html>
    );
}
