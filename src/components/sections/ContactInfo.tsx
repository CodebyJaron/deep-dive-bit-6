import { FaPhoneVolume } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdMarkEmailUnread } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <div className='flex-col justify-center px-4'>
            <img src='logo.png' alt='logo' className='items-center w-[250px] h-[150px] object-fit rounded-lg' />

            <p className='mt-10 text-gray-400 text-sm'>
                We willen graag weten waar je mee van dienst kunnen zijn. Je kunt ons bereiken via de wegen die
                hieronder beschreven staan, maar je kunt ook links hier van een bericht achterlaten en dan nemen we zo
                snel mogelijk contact met u op.
            </p>

            <div className='flex-col mt-12 space-y-4'>
                <div className='flex items-center gap-4 '>
                    <FaPhoneVolume className='w-4 h-4 text-primary' />
                    <a href='' className='hover:text-primary'>
                        06-12345678
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <MdMarkEmailUnread className='w-4 h-4 text-primary' />{' '}
                    <a href='mailto:hallo@code0productie.nl' className='hover:text-primary'>
                        hallo@code0productie.nl
                    </a>
                </div>

                <div className='flex items-center gap-4'>
                    <IoLocationSharp className='w-4 h-4 text-primary' />
                    <a href='' className='hover:text-primary'>
                        Nieuw Amsterdamseweg 74, Schoonebeek
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
