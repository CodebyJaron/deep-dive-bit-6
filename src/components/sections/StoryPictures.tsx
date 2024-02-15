import Image from "next/image";

const StoryPictures = ({ images }: { images: string[] }) => {
    if (images.length === 0)
        return (
            <h1 className="text-primary font-bold text-center">
                Er zijn geen foto&apos;s bekend.
            </h1>
        );
    return (
        <div>
            <h1 className="mt-16 text-center text-primary font-bold text-3xl">
                Foto&apos;s
            </h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-4">
                {images.map((image, index) => {
                    return (
                        <div className="" key={index}>
                            <Image
                                src={image}
                                alt="Story"
                                width={400}
                                height={400}
                                className="rounded-md object-fill bg-primary shadow-lg"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StoryPictures;
