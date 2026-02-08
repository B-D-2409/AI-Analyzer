import React from 'react';

const SentimentBadge = ({ sentiment }) => {
    const colors = {
        Positive: "bg-green-500/20 text-green-400 border-green-500/30",
        Negative: "bg-red-500/20 text-red-400 border-red-500/30",
        Neutral: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };

    return (
        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${colors[sentiment] || colors.Neutral}`}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            <span className="text-sm font-bold tracking-wide uppercase">{sentiment}</span>
        </div>
    );
};

export default SentimentBadge;