import React from 'react';

export default function PrimaryButton({
    children,
    inline = false,
    extraClass = '',
}: {
    children: React.ReactNode;
    inline?: boolean;
    extraClass?: string;
}) {
    const className = `flex gap-2 text-md rounded-md shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105 font-semibold ${extraClass} ${
        inline
            ? 'border-2 border-primary text-black hover:text-white bg-transparent hover:bg-primary'
            : 'text-white bg-primary hover:bg-primary-hover'
    }`;

    return <button className={className}>{children}</button>;
}
