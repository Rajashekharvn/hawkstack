import React from 'react';
import hawkstackLogo from '../assets/hawkstack-logo.svg';

const Footer = () => {
    const productLinks = ['Features', 'Pricing', 'Documentation', 'API Reference'];
    const companyLinks = ['About Us', 'Careers', 'Blog', 'Contact'];
    const legalLinks = ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'];

    return (
        <footer className="bg-gray-950 text-gray-400 py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1 - Logo & Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            {/* Logo Icon */}
                            <img src={hawkstackLogo} alt="HawkStack" className="h-10" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Enterprise AI & Cloud Security Solutions for modern businesses
                        </p>
                    </div>

                    {/* Column 2 - Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-gray-600">
                        © 2024 HawkStack × RedHat. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        {/* LinkedIn */}
                        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        {/* Twitter */}
                        <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
