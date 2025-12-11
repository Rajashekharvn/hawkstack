import React from 'react';
import CTAButton from './CTAButton';
import StatCard from './StatCard';
import FloatingIcon from './FloatingIcon';
import rhcsaBadge from '../assets/rhcsa-badge.png';
import gradientCubes from '../assets/gradient-cubes.png';
import cloud from '../assets/cloud.png';
import securityIcon from '../assets/security-icon.png';

const Hero = () => {
    return (
        <section className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-6 animate-fade-up">
                        {/* Tag Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-cyan-400">Red Hat Certified Training</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            <span className="gradient-text">
                                RHCSA Certification &
                            </span>
                            <br />
                            <span className="text-white">
                                Enterprise Cloud Solutions
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-pink-300 max-w-xl leading-relaxed">
                            Master Red Hat Enterprise Linux and accelerate your career with industry-recognized certifications and hands-on cloud training.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <CTAButton variant="primary" className="text-base px-8 py-4">
                                Enroll for RHCSA / Training
                            </CTAButton>
                            <CTAButton variant="secondary" className="text-base px-8 py-4">
                                View Courses
                            </CTAButton>
                        </div>
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-16 pt-12">

                            {/* 99.9% */}
                            <div>
                                <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                                <div className="text-purple-300 text-sm">Uptime SLA</div>
                            </div>

                            {/* 500K+ */}
                            <div>
                                <div className="text-3xl font-bold" style={{ color: '#EE0000' }}>500K+</div>
                                <div className="text-sm" style={{ color: '#FFA2A2' }}>Threats Blocked</div>
                            </div>

                            {/* 24/7 */}
                            <div>
                                <div className="text-3xl font-bold text-lime-400">24/7</div>
                                <div className="text-orange-300 text-sm">Monitoring</div>
                            </div>

                        </div>

                    </div>

                    {/* Right Column - 3D Illustration */}
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Background Glow - Changed to Black */}
                        <div className="absolute inset-0 bg-black blur-3xl"></div>

                        {/* Gradient Cubes Background Image - Colorful */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
                            <img
                                src={gradientCubes}
                                alt="Gradient Cubes"
                                className="w-[500px] h-[500px] object-contain"
                            />
                        </div>

                        {/* Floating Icons Container - Above Background */}
                        <div className="relative z-10 w-full h-full">
                            {/* Cloud */}
                            <div
                                className="absolute top-20 left-10"
                                style={{
                                    opacity: 0,
                                    animation: `fadeIn 1s ease-out 0.5s forwards, floatHorizontal 4s ease-in-out 1.5s infinite`
                                }}
                            >
                                <img src={cloud} alt="Cloud" className="w-40 h-40" />
                            </div>





                            <FloatingIcon className="absolute top-1/3 right-1" delay={0.5}>
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-lg security-card">

                                    {/* Security Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <img src={securityIcon} alt="Security" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex flex-col">
                                        <span className="text-lime-300 text-sm">Security Status</span>
                                        <span className="text-yellow-300 font-semibold text-md">All Systems Protected</span>
                                    </div>

                                </div>
                            </FloatingIcon>



                            {/* Events / Response Card — Static */}
                            <div className="absolute bottom-24 right-24">
                                <div className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg flex items-center gap-6">

                                    {/* Left Metric */}
                                    <div className="flex flex-col">
                                        <span className="text-cyan-400 text-xl font-bold">10M+</span>
                                        <span className="text-purple-300 text-sm">Events/Day</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-10 w-px bg-white/20"></div>

                                    {/* Right Metric */}
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold" style={{ color: '#EE0000' }}>50ms</span>
                                        <span className="text-sm" style={{ color: '#FFA2A2' }}>Response</span>
                                    </div>

                                </div>
                            </div>


                            {/* RHCSA Badge */}
                            {/* <FloatingIcon className="absolute top-1/2 left-1/4" delay={0.9}>
                                <div className="w-24 h-24 bg-red-600/20 backdrop-blur-md rounded-full border-4 border-red-600/50 flex items-center justify-center neon-glow">
                                    <div className="text-center">
                                        <div className="text-xs font-bold text-red-400">RHCSA</div>
                                        <div className="text-xs text-red-300">Certified</div>
                                    </div>
                                </div>
                            </FloatingIcon> */}
                            <FloatingIcon className="absolute top-2/3 right+10" delay={1.2}>
                                <img src={rhcsaBadge} alt="RHCSA Badge" className="w-48 h-48 object-contain hover:scale-110 transition-transform duration-300" />
                            </FloatingIcon>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
