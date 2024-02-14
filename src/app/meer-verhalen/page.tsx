'use client';
import Carousel from '@/components/Carousel';
import StoryAbout from '@/components/sections/StoryAbout';
import StoryPictures from '@/components/sections/StoryPictures';
import { useState } from 'react';

interface Story {
    name: string;
    slogan: string;

    aboutHeader: string;
    aboutDescription: string;
    aboutImage: string;

    images: string[];
}

const stories: Story[] = [
    {
        name: '<NAME>',
        slogan: 'Schatkist',

        aboutHeader: 'Schatkist',
        aboutDescription: 'Schatkist is een theaterstuk gemaakt door <NAME> en <NAME>. Het theaterst',

        aboutImage: '/images/schatkist.jpg',
        images: [],
    },
];

export default function MeerVerhalen() {
    const [index, setIndex] = useState(0);

    const nextStory = () => {
        setIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    const prevStory = () => {
        setIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    };

    const story = stories[index];

    return (
        <div className='min-h-full'>
            <div className='grid justify-center'>
                <Carousel headerText='Kapitein Kromspijker & Sophie' headerSubtext='Het geheim van de schatkist' />
            </div>

            <div className='mt-16 lg:px-24 sm:px-12 px-6 space-y-8'>
                <StoryAbout
                    aboutHeader={story.aboutHeader}
                    aboutDescription={story.aboutDescription}
                    aboutImage={story.aboutImage}
                />

                <StoryPictures images={story.images} />
            </div>

            <div className='mt-16'></div>
        </div>
    );
}
