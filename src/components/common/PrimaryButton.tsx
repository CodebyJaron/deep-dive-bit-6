import React from 'react';

export default function PrimaryButton({ children, inline = false }: { children: React.ReactNode; inline?: boolean }) {
    const className = `flex gap-2 py-2 px-4 text-md rounded-md shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105 font-semibold text-white ${
        inline
            ? 'border-2 border-primary text-black hover:text-white bg-transparent hover:bg-primary'
            : 'bg-primary hover:bg-primary-hover'
    }`;

    return <button className={className}>{children}</button>;
}
