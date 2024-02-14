import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={montserrat.className + ' bg-gray-100'}>
                <div>
                    <Navbar />
                </div>

                <div className='bg-gray-100'>{children}</div>

                <div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
