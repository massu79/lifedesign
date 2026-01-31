import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary', // primary, secondary, ghost, outline
    size = 'md', // sm, md, lg
    className,
    ...props
}) => {
    const baseStyles = 'btn-base inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-light)]';

    const variants = {
        primary: 'bg-[var(--color-primary)] text-white hover:bg-[#F97316] hover:shadow-lg shadow-md',
        secondary: 'bg-[var(--color-secondary-light)] text-[var(--color-secondary)] hover:bg-[#BAE6FD]',
        outline: 'bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-main)] hover:text-[var(--color-text-main)]',
        ghost: 'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-main)]',
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
