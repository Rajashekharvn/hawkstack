import React from 'react';

const FloatingIcon = ({ children, delay = 0, className = '' }) => {
    return (
        <div
            className={className}
            style={{
                opacity: 0,
                animation: `fadeIn 1s ease-out ${delay}s forwards, float 3s ease-in-out ${delay + 1}s infinite`
            }}
        >
            {children}
        </div>
    );
};

export default FloatingIcon;
