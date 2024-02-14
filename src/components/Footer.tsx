import { MdKeyboardArrowRight, MdMarkEmailUnread } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
    const paginateItems = [
        {
            href: '/',
            text: 'Home',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Meer verhalen',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Meer karakters',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Contact',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Home',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Meer verhalen',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Meer karakters',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Contact',
            icon: <MdKeyboardArrowRight className='w-4 h-4 text-primary' />,
        },
    ];

    const contactItems = [
        {
            href: '/',
            text: '06-12345678',
            icon: <FaPhoneVolume className='w-4 h-4 text-primary' />,
        },
        {
            href: 'mailto:hallo@code0productie.nl',
            text: 'hallo@code0productie.nl',
            icon: <MdMarkEmailUnread className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: 'Nieuw Amsterdamseweg 74, Schoonebeek',
            icon: <IoLocationSharp className='w-4 h-4 text-primary' />,
        },
        {
            href: '/',
            text: '',
            icon: '',
        },
    ];

    const chunkArray = (arr: any, size: any) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };

    const renderList = (items: any, itemsPerPage: number) => {
        const paginatedItems = chunkArray(items, itemsPerPage);

        return (
            <div className='flex gap-8'>
                {paginatedItems.map((page, pageIndex) => (
                    <div key={pageIndex} className='flex-col'>
                        {page.map((item: any, index: number) => (
                            <div key={index} className='flex items-center gap-2'>
                                {item.icon}
                                <a href={item.href} className='hover:text-primary'>
                                    {item.text}
                                </a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className='bg-white'>
            <div className='border-b-8 border-primary' />

            <div className='py-8 bg-white grid grid-cols-3 items-center mt-4'>
                <div className='flex justify-center'>
                    <img src='logo.png' alt='logo' className='w-32 cursor-default' />
                </div>

                <div className='flex flex-col justify-center'>
                    <h3 className='uppercase font-bold text-black text-sm cursor-default'>pagina's</h3>
                    {renderList(paginateItems, 4)}
                </div>

                <div className='flex flex-col justify-center'>
                    <h3 className='uppercase font-bold text-black text-sm cursor-default'>contact</h3>
                    {renderList(contactItems, 4)}
                </div>
            </div>

            <div className='py-4 px-16 bg-gray-300 flex justify-between'>
                <p className='text-xs text-gray-500'>
                    © Copyright 2023️ - Code 0 Producties - Alle rechten voorbehouden.
                </p>

                <p className='text-xs text-gray-500'>Algemene voorwaarden | Cookies</p>
            </div>
        </div>
    );
};

export default Footer;
