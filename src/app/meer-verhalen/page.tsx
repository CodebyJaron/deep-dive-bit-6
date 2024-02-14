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
        name: 'Kapitein Kromspijker & Sophie',
        slogan: 'Het geheim van de schatkist',

        aboutHeader: 'Hoe een gewoon meisje een stoere stuurvrouw werd...',
        aboutDescription: `
        Als Sophie op zolder een beetje aan het rondneuzen is, komt ze een oud boek tegen. Dat is interessant! Eens kijken wat erin staat! Ze gaat op de oude kist zitten en begint te lezen. Er staat van alles geschreven in een rare taal.
        Maar dan komt het verhaal uit het boek tot leven. Samen met Kapitein Kromspijker gaan “stuurvrouwe” Sophie op zoek naar de schat der zeeën. Zal het hun lukken om de schat af te pakken van de stinkende Kapitein Spuuglelijk in een gevaarlijk gevecht met de piraten?
        Deze voorstelling is voor kinderen vanaf ongeveer 4 jaar. 
        `,

        aboutImage: '/images/schatkist/schatkist.jpg',
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
                <Carousel headerText={story.name} headerSubtext={story.slogan} />
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
