'use client';

import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import About from '@/components/sections/About';
import Companies from '@/components/sections/Companies';

export default function Home() {
    return (
        <div className='min-h-full'>
            <div className='grid justify-center'>
                <Carousel />
            </div>

            <div className='px-24'>
                <About />

                <Companies />
            </div>

            {/* Extra space */}
            <div className='mb-12'></div>

            <Footer />
        </div>
    );
}
