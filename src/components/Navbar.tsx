import PrimaryButton from './common/PrimaryButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import DropdownMenu from './dropdown/DropdownMenu';

const Navbar = () => {
    return (
        <nav className=''>
            <div className='border-b-8 border-primary' />

            <div className='py-4 bg-white grid grid-cols-3'>
                <div className='flex justify-center'>
                    <img src='logo.png' alt='logo' className='w-16 cursor-pointer' />
                </div>

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
                        {/* Hier content */}
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

                <div className='flex justify-center'>
                    <PrimaryButton extraClass='py-2 px-4'>
                        <FaRegEnvelopeOpen className='mt-1' /> Contact
                    </PrimaryButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
