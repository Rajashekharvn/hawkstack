import React from 'react';
import CTAButton from './CTAButton';
import hawkstackLogo from '../assets/hawkstack-logo.svg';
import redhatLogo from '../assets/Red_Hat_Logo.svg';

const Navbar = () => {
    const menuItems = ['Home', "HawkStack's Approach", 'Red Hat Services', 'RHCSA Certification'];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center gap-8">
                    {/* Left: Logos */}
                    <div className="flex items-center gap-4">
                        <div className="bg-white px-4 py-2 rounded-lg">
                            <img src={hawkstackLogo} alt="HawkStack" className="h-8" />
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg">
                            <img src={redhatLogo} alt="Red Hat" className="h-8" />
                        </div>
                    </div>

                    {/* Center: Menu Items */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Right: CTA Buttons */}
                    <div className="flex items-center gap-4 ml-auto">
                        <button className="hidden md:block px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white hover:bg-gray-800 hover:border-red-500 transition-all duration-300 text-sm font-medium">
                            Contact
                        </button>
                        <CTAButton variant="primary" className="text-sm">
                            Talk to Learning Team
                        </CTAButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
