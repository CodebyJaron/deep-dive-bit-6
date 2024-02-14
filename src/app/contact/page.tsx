'use client';

import Carousel from '@/components/Carousel';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export default function ContactPage() {
    return (
        <div className='min-h-full mb-10'>
            <div className='grid justify-center'>
                <Carousel headerText='Contact' headerSubtext='Kom in contact met ons' />
            </div>

            <div className='mt-16 lg:px-24 sm:px-12 px-6 space-y-8'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8'>
                    <div>
                        <ContactForm />
                    </div>

                    <div>
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}
