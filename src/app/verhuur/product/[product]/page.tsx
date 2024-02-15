"use client";

import { useState } from "react";
import { Product, products } from "../../constant";
import Image from "next/image";
import PrimaryButton from "@/components/common/PrimaryButton";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdAddShoppingCart } from "react-icons/md";

export default function ProductOverview({
    params,
}: {
    params: { product: number };
}) {
    const [value, onChange] = useState(new Date());

    const product = products[params.product];

    if (!product) {
        return (
            <h1 className="text-primary font-bold text-4xl text-center mt-16 mb-16">
                Kan de opgegeven product niet vinden!
            </h1>
        );
    }
    return (
        <div className="mt-10 px-24 mb-16">
            <div className="m-4">
                <div className="flex justify-start">
                    <p className="text-gray-700">
                        Product <span className="font-bold">/</span>{" "}
                        {product.name}
                    </p>
                </div>

                <div>
                    <h1 className="text-black font-bold text-4xl">
                        {product.name}
                    </h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 m-4">
                <div className="">
                    <div className="w-full">
                        <Calendar locale={"nl-NL"} />
                    </div>

                    <div className="flex gap-4 mt-8">
                        <p className="font-semibold">
                            € {product.price},- per week
                        </p>
                    </div>

                    <div className="mt-6 flex justify-center items-center">
                        <PrimaryButton extraClass="flex py-2 w-full items-center justify-center text-center mr-4">
                            <p className="flex justify-center items-center gap-4 text-center">
                                <MdAddShoppingCart className="w-8 h-8" />
                                Voeg toe aan winkelwagen
                            </p>
                        </PrimaryButton>
                    </div>
                </div>

                {/* image */}
                <div className="">
                    <Image
                        src={product.image}
                        className="object-fill w-full bg-primary rounded-lg shadow-lg"
                        alt="image"
                        width={400}
                        height={400}
                    />

                    <div className="mt-8">
                        <p className="text-black">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
