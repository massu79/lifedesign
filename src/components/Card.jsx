import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, hoverEffect = true }) => {
  return (
    <div
      className={twMerge(
        clsx(
          'card-base p-6 relative overflow-hidden',
          hoverEffect && 'card-hover',
          className
        )
      )}
    >

      {/* Content wrapper to ensure z-index above gradients */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
