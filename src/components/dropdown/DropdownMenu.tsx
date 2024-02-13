import React, { useState, ReactNode } from 'react';

interface DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='inline-block'>{trigger}</div>
            {isOpen && (
                <div className='absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>{children}</div>
            )}
        </div>
    );
};

export default DropdownMenu;
