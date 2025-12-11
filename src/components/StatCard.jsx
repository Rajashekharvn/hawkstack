import React from 'react';

const StatCard = ({ value, label, icon }) => {
    return (
        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brandBlue/50 transition-all duration-300">
            {icon && <div className="text-2xl">{icon}</div>}
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm text-gray-400 text-center">{label}</div>
        </div>
    );
};

export default StatCard;
