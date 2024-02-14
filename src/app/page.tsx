'use client';

import Carousel from '@/components/Carousel';
import About from '@/components/sections/About';
import Companies from '@/components/sections/Companies';

export default function Home() {
    return (
        <div className='min-h-full'>
            <div className='grid justify-center'>
                <Carousel headerText='Code 0 Producties' headerSubtext='Avontuurlijk theater op elke plek!' />
            </div>

            <div className='lg:px-24 sm:px-12 px-6'>
                <About />

                <Companies />
            </div>

            {/* Extra space */}
            <div className='mb-12 bg-gray-100'></div>
        </div>
    );
}
