"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import DropdownMenu from "./dropdown/DropdownMenu";
import PrimaryButton from "./common/PrimaryButton";

const NAV_ITEMS = [
    { label: "Onze verhalen", link: "#" },
    { label: "Onze karakters", link: "#" },
    { label: "Bij code 0 producties", link: "#" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const renderDropdownMenu = () => {
        return NAV_ITEMS.map((item, index) => (
            <DropdownMenu
                key={index}
                trigger={<DropdownTrigger label={item.label} />}
            >
                <Link
                    href={item.link}
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md"
                >
                    Dropdown
                </Link>
            </DropdownMenu>
        ));
    };

    const DropdownTrigger = ({ label }: { label: string }) => (
        <div className="flex items-center">
            <span className="inline-block uppercase font-bold text-[10px] cursor-pointer">
                {label}
            </span>
            <MdKeyboardArrowDown className="w-4 h-4" />
        </div>
    );

    return (
        <nav className="relative z-10">
            <div className="border-b-8 border-primary" />
            <div className="py-4 bg-white grid grid-cols-3">
                <div className="flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        className="w-16 cursor-pointer"
                        width={64}
                        height={64}
                    />
                </div>
                <div className="hidden sm:block">
                    <div className="flex flex-row justify-between items-center gap-8 scale-110">
                        {renderDropdownMenu()}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <PrimaryButton extraClass="py-2 px-4">
                        <FaRegEnvelopeOpen className="mt-1" /> Contact
                    </PrimaryButton>
                </div>
                <div className="md:hidden flex justify-center items-center">
                    <DropdownMenu
                        trigger={
                            menuOpen ? (
                                <CloseMenuIcon toggleMenu={toggleMenu} />
                            ) : (
                                <OpenMenuIcon toggleMenu={toggleMenu} />
                            )
                        }
                    >
                        {renderDropdownMenu()}
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

const OpenMenuIcon = ({ toggleMenu }: { toggleMenu: () => void }) => (
    <MdMenu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
);

const CloseMenuIcon = ({ toggleMenu }: { toggleMenu: () => void }) => (
    <MdClose className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
);

export default Navbar;
