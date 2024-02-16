import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';
import type { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Code 0 Producties",
    description: "Bekijk hier onze mooie website van Code 0 Producties",
    authors: [
        {
            name: "Jaron de Klein",
            url: "https://jaron.nl",
        },
        {
            name: "Pascal Wiersma",
            url: "https://pascalservices.nl/",
        },
    ],
    publisher: "Code 0 Producties",
    keywords: ["theater", "avontuurlijk", "code 0", "producties"],
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    montserrat.className + " bg-gray-100 overflow-x-hidden"
                }
            >
                <div>
                    <Navbar />
                </div>

                <div className="bg-gray-100">{children}</div>

                <div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
