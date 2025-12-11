import React from 'react';

const CTASection = () => {
    return (
        <section className="relative bg-gradient-to-b from-black via-gray-950 to-black py-32 px-6 overflow-hidden">
            {/* Radial Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-5xl mx-auto text-center">

                {/* Top Label Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-600/50 bg-transparent mb-8">
                    <span className="text-sm text-gray-300">Ready to</span>
                    <span className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                        Get Started?
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                    Secure Your Cloud Infrastructure
                    <br />
                    <span className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
                        Today
                    </span>
                </h2>

                {/* Subtext */}
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Join industry leaders in building secure, AI-powered cloud infrastructure
                </p>

                {/* Button Row */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Button 1 - Start Free Trial */}
                    <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70 hover:scale-105 transition-all duration-300 flex items-center gap-3">
                        <span>Start Free Trial</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>

                    {/* Button 2 - Contact Sales */}
                    <button className="px-8 py-4 bg-transparent border border-gray-700 rounded-xl font-semibold text-white hover:border-gray-500 transition-all duration-300 flex items-center gap-3">
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
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>Contact Sales</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CTASection;
