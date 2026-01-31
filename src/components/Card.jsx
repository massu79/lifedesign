import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Note: Using standard CSS classes defined in index.css, combined with some inline styles for flexibility if needed.
// Integrating `clsx` and `twMerge` pattern for future proofing if we mix tailwind, but primarily using our CSS variables.

const Card = ({ children, className, hoverEffect = true }) => {
  return (
    <div 
      className={clsx(
        'glass-panel rounded-2xl p-6 transition-all duration-300', 
        hoverEffect && 'hover:bg-[var(--color-bg-card-hover)] hover:translate-y-[-2px]',
        className
      )}
      style={{
        // Fallback or specific overrides can go here
      }}
    >
      {children}
    </div>
  );
};

export default Card;
