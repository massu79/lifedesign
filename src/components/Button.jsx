import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary', // primary, secondary, ghost, neon
    size = 'md', // sm, md, lg
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-dark)] uppercase text-xs';

    const variants = {
        primary: 'btn-solana-primary border border-white/10',
        secondary: 'btn-solana-secondary', // Using utility class defined in index.css
        ghost: 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[rgba(255,255,255,0.05)]',
        neon: 'bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-black hover:shadow-[0_0_20px_var(--color-secondary-glow)]'
    };

    const sizes = {
        sm: 'px-3 py-2',
        md: 'px-5 py-3',
        lg: 'px-8 py-4 text-sm',
    };

    return (
        <button
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
