import React from 'react';

const SentimentBadge = ({ sentiment }) => {
    const styles = {
        Positive: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-emerald-500/10",
        Negative: "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-rose-500/10",
        Neutral: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-amber-500/10",
    };

    return (
        <div className={`
        flex items-center gap-2 px-4 py-2 rounded-full border shadow-[0_0_15px_-3px] 
        ${styles[sentiment] || styles.Neutral} backdrop-blur-md transition-all
    `}>
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.15em] uppercase">{sentiment}</span>
        </div>
    );
};
export default SentimentBadge;