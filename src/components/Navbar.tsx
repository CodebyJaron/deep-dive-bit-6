'use client';
import React, { useState } from 'react';
import PrimaryButton from './common/PrimaryButton';
import { MdMenu, MdClose, MdKeyboardArrowDown } from 'react-icons/md'; // Import the menu and close icons
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import DropdownMenu from './dropdown/DropdownMenu';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='relative z-10'>
            <div className='border-b-8 border-primary' />

            <div className='py-4 bg-white grid grid-cols-3 items-center'>
                <div className='flex justify-center'>
                    <Image src='/logo.png' alt='logo' className='w-16 cursor-pointer' width={64} height={64} />
                </div>

                <div className='hidden sm:block'>
                    <div className='flex flex-row justify-between items-center gap-8 scale-110'>
                        <DropdownMenu
                            trigger={
                                <div className='flex items-center'>
                                    <span className='inline-block uppercase font-bold text-[10px] cursor-pointer'>
                                        Onze verhalen
                                    </span>
                                    <MdKeyboardArrowDown className='w-4 h-4' />
                                </div>
                            }
                        >
                            <div className=''>
                                <Link
                                    href='#'
                                    className='block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md'
                                >
                                    Dropdown
                                </Link>
                            </div>
                        </DropdownMenu>

                        <DropdownMenu
                            trigger={
                                <div className='flex items-center'>
                                    <p className='inline-block uppercase font-bold text-[10px] cursor-pointer'>
                                        Onze karakters
                                    </p>
                                    <MdKeyboardArrowDown className='w-4 h-4' />
                                </div>
                            }
                        >
                            <Link href='#' className='block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md'>
                                Dropdown
                            </Link>
                        </DropdownMenu>

                        <DropdownMenu
                            trigger={
                                <div className='flex items-center'>
                                    <p className='inline-block uppercase font-bold text-[10px] cursor-pointer'>
                                        Bij code 0 producties
                                    </p>
                                    <MdKeyboardArrowDown className='w-4 h-4' />
                                </div>
                            }
                        >
                            <Link href='#' className='block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md'>
                                Dropdown
                            </Link>
                        </DropdownMenu>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <PrimaryButton extraClass='py-2 px-4'>
                        <FaRegEnvelopeOpen className='mt-1' /> Contact
                    </PrimaryButton>
                </div>

                <div className='md:hidden flex justify-center items-center'>
                    <DropdownMenu
                        trigger={
                            <div className='flex justify-center items-center scale-150 mt-2 md:hidden'>
                                {menuOpen ? (
                                    <MdClose className='w-6 h-6 cursor-pointer' onClick={toggleMenu} />
                                ) : (
                                    <MdMenu className='w-6 h-6 cursor-pointer' onClick={toggleMenu} />
                                )}
                            </div>
                        }
                    >
                        <DropdownMenu
                            trigger={
                                <div className='flex items-center'>
                                    <span className='inline-block uppercase font-bold text-[10px] cursor-pointer'>
                                        Onze verhalen
                                    </span>
                                    <MdKeyboardArrowDown className='w-4 h-4' />
                                </div>
                            }
                        >
                            <div className=''>
                                <Link
                                    href='#'
                                    className='block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md'
                                >
                                    Dropdown
                                </Link>
                            </div>
                        </DropdownMenu>

                        <DropdownMenu
                            trigger={
                                <div className='flex items-center'>
                                    <p className='inline-block uppercase font-bold text-[10px] cursor-pointer'>
                                        Onze karakters
                                    </p>
                                    <MdKeyboardArrowDown className='w-4 h-4' />
                                </div>
                            }
                        >
                            {/* Hier content */}
                        </DropdownMenu>

                        <DropdownMenu
                            trigger={
                                <div className='flex items-center'>
                                    <p className='inline-block uppercase font-bold text-[10px] cursor-pointer'>
                                        Bij code 0 producties
                                    </p>
                                    <MdKeyboardArrowDown className='w-4 h-4' />
                                </div>
                            }
                        >
                            {/* Hier content */}
                        </DropdownMenu>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
