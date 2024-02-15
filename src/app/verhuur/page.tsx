'use client';
import Image from 'next/image';
import { products } from './constant';
import PrimaryButton from '@/components/common/PrimaryButton';
import { MdAddShoppingCart, MdKeyboardArrowRight } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import Link from "next/link";

export default function Verhuur() {
    return (
        <div className="min-h-full mb-16 sm:px-12 px-24 lg:px-24">
            <div className="flex flex-col items-center justify-center mt-8 mb-6">
                <h1 className="text-primary text-[4.2rem] font-bold">
                    Verhuur
                </h1>
                <p className="text-gray-500">
                    Bekijk hier alle producten die wij bij
                    <span className="px-1.5 text-primary font-semibold">
                        Code 0 Producties
                    </span>
                    verhuren!
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-1">
                {products.map((product, index) => {
                    return (
                        <div
                            key={product.name}
                            className="bg-gray-200 rounded-md"
                        >
                            <div className="">
                                <Image
                                    src={"/images/biertafel.png"}
                                    alt="bier"
                                    className="object-fill bg-primary rounded-md"
                                    width={400}
                                    height={400}
                                />
                            </div>

                            <div className="flex flex-col px-4 justify-center mt-6">
                                <h1 className="text-black text-center font-bold text-xl">
                                    {product.name}
                                </h1>

                                <div className="px-2 mt-4 flex flex-col justify-center">
                                    {product.features.map((productFeature) => {
                                        return (
                                            <div
                                                key={productFeature.name}
                                                className="flex items-center"
                                            >
                                                <MdKeyboardArrowRight className="w-4 h-4 text-primary" />

                                                <h1
                                                    key={productFeature.name}
                                                    className="underline"
                                                >
                                                    {productFeature.name}
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-4 mb-4 flex justify-between">
                                    <div className="flex items-center">
                                        <h1 className="text-black font-bold text-md">
                                            € {product.price},- p/w
                                        </h1>
                                    </div>

                                    <div className="items-center">
                                        <Link
                                            href={`/verhuur/product/${index}`}
                                        >
                                            <PrimaryButton extraClass="py-2 px-6">
                                                <FaEye className="w-8 h-8" />
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
