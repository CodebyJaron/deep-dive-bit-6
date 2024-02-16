"use client";

import React, { useState, ReactNode, useRef, useEffect } from "react";

interface DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
    item?: {
        label: string;
        link: string;
        dropdown: { label: string; link: string }[];
    };
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    trigger,
    item = { dropdown: [] },
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current ?? undefined);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleDropdownMouseEnter = () => {
        clearTimeout(timeoutRef.current ?? 0);
        setIsOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="inline-block">{trigger}</div>
            {isOpen &&
                typeof item === "object" &&
                item?.dropdown &&
                item.dropdown.length > 0 && (
                    <div
                        ref={dropdownRef}
                        className="absolute z-50 right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg py-1"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                    >
                        {children}
                    </div>
                )}
        </div>
    );
};

export default DropdownMenu;
