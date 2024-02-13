import { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = ['/images/slide-1.jpg', '/images/slide-2.jpg', '/images/slide-3.jpeg'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 10 * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='relative h-[80vh] w-full max-w-full overflow-hidden rounded-b-[20%]'>
            {images.map((image, index) => (
                <div key={index} className={`carousel-slide ${index === currentSlide ? 'block' : 'hidden'}`}>
                    <img src={image} alt={`Image ${index + 1}`} className='blur-sm rounded-b-lg brightness-50' />
                </div>
            ))}
            <div className='absolute -top-[50px] w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-white text-[4.2rem] font-bold'>Code 0 Producties</h1>
                <p className='text-gray-300 text-xl'>Avontuurlijk theater op elke plek!</p>
            </div>
        </div>
    );
};

export default Carousel;
