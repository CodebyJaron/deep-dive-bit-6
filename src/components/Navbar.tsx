import PrimaryButton from './common/PrimaryButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegEnvelopeOpen } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className=''>
            <div className='border-b-8 border-primary' />

            <div className='py-4 bg-white grid grid-cols-3'>
                <div className='flex justify-center'>
                    <img src='logo.png' alt='logo' className='w-16 cursor-pointer' />
                </div>

                <div className='flex flex-row justify-between items-center gap-8 scale-110'>
                    <div className='flex items-center'>
                        <span className='inline-block uppercase font-bold text-[10px]'>Onze verhalen</span>
                        <MdKeyboardArrowDown className='w-4 h-4' />
                    </div>
                    <div className='flex items-center'>
                        <p className='inline-block uppercase font-bold text-[10px]'>Onze karakters</p>
                        <MdKeyboardArrowDown className='w-4 h-4' />
                    </div>
                    <div className='flex items-center'>
                        <p className='inline-block uppercase font-bold text-[10px]'>Bij code 0 producties</p>
                        <MdKeyboardArrowDown className='w-4 h-4' />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <PrimaryButton>
                        <FaRegEnvelopeOpen className='mt-1' /> Contact
                    </PrimaryButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
