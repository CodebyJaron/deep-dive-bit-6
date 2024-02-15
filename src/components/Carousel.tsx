import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

interface props {
    headerText: string;
    headerSubtext: string;
}

const Carousel = ({ headerText, headerSubtext }: props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = useMemo(
        () => [
            "/images/slide-1.jpg",
            "/images/slide-2.jpg",
            "/images/slide-3.jpeg",
        ],
        []
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 10 * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [images]);

    return (
        <div className="h-[80vh] w-full max-w-full overflow-hidden rounded-b-[20%] flex flex-col justify-center items-center z-0">=======
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${
                        index === currentSlide ? "" : "hidden"
                    }`}
                >
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="blur-sm rounded-b-lg brightness-50"
                        style={{ width: "100%", height: "auto" }}
                        width={1920}
                        height={1080}
                    />
                </div>
            ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-white text-[4.2rem] font-bold">
                    {headerText}
                </h1>
                <p className="text-gray-300 text-xl">{headerSubtext}</p>
            </div>
        </div>
    );
};

export default Carousel;
