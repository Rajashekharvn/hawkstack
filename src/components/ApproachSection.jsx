import React from 'react';

const ApproachSection = () => {
    const features = [
        {
            title: "Logic's Framework",
            description: "Precision-engineered structures & analytics",
            iconColor: "bg-red-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            )
        },
        {
            title: "Innovation's Leap",
            description: "Data-driven, agile methodologies",
            iconColor: "bg-blue-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
            )
        },
        {
            title: "Insight's Depth",
            description: "Predictive modeling & deep analytics",
            iconColor: "bg-green-600",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Page Title Block */}
                <div className="text-center mb-16">
                    {/* Title */}
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            HawkStack's
                        </span>
                        {' '}
                        <span className="text-gray-900">Approach</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        HawkStack Technologies accelerates digital evolution with DevOps, Cloud, Automation,
                        and Security expertise—driving innovation and faster time-to-market.
                    </p>
                </div>

                {/* Three Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon Container */}
                                <div className={`flex-shrink-0 w-16 h-16 ${feature.iconColor} rounded-2xl flex items-center justify-center shadow-md`}>
                                    {feature.icon}
                                </div>

                                {/* Text Block */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ApproachSection;
