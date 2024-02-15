import Image from "next/image";

const Companies = () => {
    return (
        <div className="mt-16">
            <h1 className="text-primary font-bold text-3xl">
                Onze werkmaatschappijen
            </h1>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-4">
                <div className="overflow-hidden rounded-lg bg-gray-200 shadow flex items-center justify-center">
                    <div className="px-4 py-12">
                        <Image
                            src="/logo.png"
                            alt="Code 0 Producties"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-200 shadow flex items-center justify-center">
                    <div className="px-4 py-12">
                        <Image
                            src="/telltales.png"
                            alt="Telltales Logo"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-200 shadow flex items-center justify-center">
                    <div className="px-4 py-12">
                        <Image
                            src="/lazyjack.png"
                            alt="Lazy Jack Logo"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
