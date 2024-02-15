'use client';
import React, { useState } from 'react';
import PrimaryButton from './common/PrimaryButton';
import { MdMenu, MdClose, MdKeyboardArrowDown } from 'react-icons/md'; // Import the menu and close icons
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import DropdownMenu from './dropdown/DropdownMenu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className=''>
            <div className='border-b-8 border-primary' />

            <div className='py-4 bg-white grid grid-cols-3'>
                <div className='flex justify-center'>
                    <img src='logo.png' alt='logo' className='w-16 cursor-pointer' />
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
                                <a href='#' className='block px-4 py-2 text-sm text-white hover:bg-gray-100 rounded-md'>
                                    Save
                                </a>
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
                                <a href='#' className='block px-4 py-2 text-sm text-white hover:bg-gray-100 rounded-md'>
                                    Save
                                </a>
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
