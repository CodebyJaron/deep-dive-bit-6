import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

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
