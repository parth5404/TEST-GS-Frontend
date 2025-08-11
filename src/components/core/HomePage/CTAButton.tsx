import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold text-white
        transition-all duration-200
        ${
          active
            ? 'bg-gradient-to-r from-primary to-secondary shadow-[2px_2px_10px_0_rgba(58,191,248,0.5)]'
            : 'bg-base-300 shadow-[2px_2px_10px_0_rgba(0,0,0,0.5)]'
        }
        hover:scale-95 hover:shadow-none
        `}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
