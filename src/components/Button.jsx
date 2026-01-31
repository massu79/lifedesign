import React from 'react';
import clsx from 'clsx';

const Button = ({
    children,
    variant = 'primary', // primary, secondary, ghost
    size = 'md', // sm, md, lg
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-dark)]';

    const variants = {
        primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-lg shadow-orange-900/20',
        secondary: 'bg-[var(--color-bg-card)] text-[var(--color-text-main)] border border-[var(--color-border)] hover:bg-[var(--color-bg-card-hover)]',
        ghost: 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[rgba(255,255,255,0.05)]',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
