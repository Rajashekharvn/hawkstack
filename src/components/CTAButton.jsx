import React from 'react';

const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105';

    const variants = {
        primary: 'bg-gradient-to-r from-brandBlue to-brandPurple text-white shadow-lg hover:shadow-xl neon-glow-blue hover:border hover:border-red-500',
        secondary: 'bg-gray-900 border border-gray-700 text-white hover:bg-gray-800 hover:border-red-500',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default CTAButton;
