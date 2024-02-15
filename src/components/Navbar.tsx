"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdMenu, MdClose } from "react-icons/md";
import DropdownMenu from "./dropdown/DropdownMenu";
import PrimaryButton from "./common/PrimaryButton";

const NAV_ITEMS = [
    {
        label: "Onze verhalen",
        link: "#",
        dropdown: [{ label: "Onze verhalen", link: "/verhalen" }],
    },
    {
        label: "Onze karakters",
        link: "#",
        dropdown: [{ label: "Onze karakters", link: "/karakters" }],
    },
    {
        label: "Bij code 0 producties",
        link: "#",
        dropdown: [{ label: "Verhuur", link: "/verhuur" }],
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="relative z-10 ">
            <div className="border-b-8 border-primary" />
            <div className="py-4 bg-white flex justify-between items-center lg:px-24 sm:px-12 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            className="w-16 cursor-pointer"
                            width={64}
                            height={64}
                        />
                    </Link>
                </div>
                {/* Navigation items */}
                <div className="flex-grow flex justify-center">
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item, index) => (
                            <DropdownMenu
                                key={index}
                                trigger={
                                    <div className="flex items-center">
                                        <span className="inline-block uppercase font-bold text-[10px] cursor-pointer">
                                            {item.label}
                                        </span>
                                        <MdKeyboardArrowDown className="w-4 h-4" />
                                    </div>
                                }
                            >
                                {item.dropdown.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        href={subItem.link}
                                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </DropdownMenu>
                        ))}
                    </div>
                </div>
                {/* Contact Button */}
                <div className="flex-shrink-0">
                    <Link href="/contact">
                        <PrimaryButton extraClass="py-2 px-4 flex items-center">
                            <FaRegEnvelopeOpen className="mr-1" />
                            Contact
                        </PrimaryButton>
                    </Link>
                </div>
                {/* Mobile menu */}
                <div className="md:hidden flex justify-end items-center">
                    <button onClick={toggleMenu} className="ml-4">
                        {menuOpen ? (
                            <MdClose className="w-6 h-6 cursor-pointer" />
                        ) : (
                            <MdMenu className="w-6 h-6 cursor-pointer" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden bg-white">
                    {NAV_ITEMS.map((item, index) => (
                        <div key={index}>
                            <div className="px-4 py-2 text-black font-bold border-b border-gray-200">
                                {item.label}
                            </div>
                            {item.dropdown.map((subItem, subIndex) => (
                                <Link
                                    key={subIndex}
                                    href={subItem.link}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md"
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

