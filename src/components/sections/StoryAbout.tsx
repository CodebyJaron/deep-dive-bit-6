import Image from "next/image";

interface props {
    aboutHeader: string;
    aboutDescription: string;
    aboutImage: string;
}

const StoryAbout = ({ aboutHeader, aboutDescription, aboutImage }: props) => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-16">
                <div>
                    <h1 className="text-primary font-bold text-3xl">
                        {aboutHeader}
                    </h1>
                    <p className="text-gray-400 text-xs mt-4">
                        {aboutDescription}
                    </p>
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-200 shadow">
                    <Image
                        className="object-fit"
                        src={aboutImage}
                        alt="image"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default StoryAbout;
