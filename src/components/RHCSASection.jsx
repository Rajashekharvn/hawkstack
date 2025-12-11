import React from 'react';
import checkRed from '../assets/check-red.png';
import checkBlue from '../assets/check-blue.png';
import checkGreen from '../assets/check-green.png';

const RHCSASection = () => {
    const features = [
        {
            title: "Performance-Based Exam",
            iconColor: "bg-red-500",
            glowColor: "shadow-red-500/50",
            icon: checkRed
        },
        {
            title: "Industry Recognized",
            iconColor: "bg-blue-500",
            glowColor: "shadow-blue-500/50",
            icon: checkBlue
        },
        {
            title: "Career Advancement",
            iconColor: "bg-green-500",
            glowColor: "shadow-green-500/50",
            icon: checkGreen
        }
    ];

    return (
        <section className="bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Top Center Icon */}
                <div className="flex justify-center mb-8 animate-fade-up">
                    <div className="w-20 h-20 bg-gradient-to-br from-brandPurple to-red-600 rounded-2xl flex items-center justify-center shadow-lg neon-glow">
                        {/* Award/Ribbon Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-10 h-10"
                        >
                            <circle cx="12" cy="8" r="6" />
                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                    </div>
                </div>

                {/* Heading Block */}
                <div className="text-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        <span className="gradient-text">Red Hat Certified System</span>
                        <br />
                        <span className="text-white">Administrator (RHCSA®)</span>
                    </h2>
                </div>

                {/* Description Paragraph */}
                <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        An IT professional who can perform core system administration on Red Hat Enterprise Linux.
                        Credential earned after passing RHCSA Exam (EX200).
                    </p>
                </div>

                {/* Three Feature Cards */}
                <div className="grid md:grid-cols-3  gap-6 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                {/* Check Icon Image */}
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={feature.icon}
                                        alt={`${feature.title} icon`}
                                        className="w-10 h-10"
                                    />
                                </div>

                                {/* Title Text */}
                                <h3 className="text-lg  text-gray-400 text-white">
                                    {feature.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RHCSASection;
