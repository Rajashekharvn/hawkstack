import React from 'react';
import bulbIcon from "../assets/bulb.svg";
import peoIcon from "../assets/peo.svg";

const TrainingSection = () => {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Training Photo Card */}
                    <div className="relative animate-fade-up">
                        {/* Background Glass Shape */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-brandBlue/20 to-brandPurple/20 rounded-3xl blur-2xl"></div>

                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/training-classroom.jpg"
                                alt="Enterprise Training Classroom"
                                className="w-full h-[350px] object-cover"
                            />

                            {/* Floating Stats Card - Bottom Left */}
                            <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-lg flex items-center gap-4 cursor-pointer transition-transform duration-300 hover:animate-bounce">
                                {/* Trophy Icon */}
                                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                    >
                                        <path d="M8 4H5a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1m8-7h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1M12 17v5m-4 0h8M8 17h8a4 4 0 0 0 4-4v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4Z" />
                                    </svg>
                                </div>


                                {/* Stats Text */}
                                <div>
                                    <div className="text-2xl font-bold text-white">98%</div>
                                    <div className="text-sm text-gray-200">Pass Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>

                        {/* Category Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandBlue/10 border border-brandBlue/30 backdrop-blur-sm">
                            <span className="text-xl">📖</span>
                            <span className="text-sm font-medium text-brandBlue">About Our Training</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                            Hands-On <span className="gradient-text">Enterprise Training</span> for Real-World Success
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Learn from industry experts with decades of experience in enterprise cloud infrastructure.
                            Our hands-on training programs combine real-world scenarios with practical labs, ensuring
                            you're fully prepared for certification exams and production environments.
                        </p>

                        {/* Feature Blocks - Two Columns */}
                        <div className="grid md:grid-cols-2 gap-6 pt-4">

                            {/* Feature 1 - Expert Mentors */}
                            <div className="flex items-start gap-4">
                                {/* Icon Circle */}
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brandBlue to-blue-250 rounded-2xl flex items-center justify-center shadow-lg neon-glow-blue">
                                    <img src={peoIcon} alt="Bulb Icon" className="w-7 h-7" />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Expert Mentors</h3>
                                    <p className="text-gray-600 text-sm">Industry veterans guide your learning journey</p>
                                </div>
                            </div>

                            {/* Feature 2 - Practical Labs */}
                            <div className="flex items-start gap-4">
                                {/* Icon Circle */}


                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-lg neon-glow-pink">
                                    <img src={bulbIcon} alt="Bulb Icon" className="w-7 h-7" />
                                </div>


                                {/* Text */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Practical Labs</h3>
                                    <p className="text-gray-600 text-sm">Real cloud environments for hands-on practice</p>
                                </div>
                            </div>

                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-brandBlue via-brandPurple to-brandPink rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 neon-glow">
                                Explore  Programs
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
