'use client';

import React, { useState, ReactNode, useRef, useEffect } from 'react';

interface DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleDropdownMouseEnter = () => {
        setIsOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const dropdownElement = dropdownRef.current;
        if (dropdownElement) {
            dropdownElement.addEventListener('mouseenter', handleDropdownMouseEnter);
            dropdownElement.addEventListener('mouseleave', handleDropdownMouseLeave);
            return () => {
                dropdownElement.removeEventListener('mouseenter', handleDropdownMouseEnter);
                dropdownElement.removeEventListener('mouseleave', handleDropdownMouseLeave);
            };
        }
    }, []);

    return (
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='inline-block'>{trigger}</div>
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className='absolute z-50 right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg py-1'
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
