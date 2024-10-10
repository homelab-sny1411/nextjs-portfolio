import type { Metadata } from "next";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  title: "Portfolio - Humez Mattéo",
  description: "Portfolio de Humez Mattéo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
