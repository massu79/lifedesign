import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, hoverEffect = true, glow = false }) => {
  return (
    <div
      className={twMerge(
        clsx(
          'glass-panel rounded-lg p-6 transition-all duration-300 relative overflow-hidden group',
          hoverEffect && 'hover:bg-[var(--color-bg-card-hover)] hover:-translate-y-1',
          glow && 'glow-border', // Apply the CSS glow effect class if prop is true
          className
        )
      )}
    >
      {/* Subtle inner border for depth */}
      <div className="absolute inset-0 border border-[var(--color-border)] rounded-lg pointer-events-none group-hover:border-[var(--color-border-glow)] transition-colors"></div>

      {/* Content wrapper to ensure z-index above gradients */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
