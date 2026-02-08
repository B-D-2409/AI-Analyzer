import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

const ResponseCard = ({ title, content, delay }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 animate-fade-in group shadow-lg"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-primary-500" />
                    <h3 className="text-slate-200 font-bold text-sm uppercase tracking-widest">{title}</h3>
                </div>
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white/5 hover:bg-primary-500 hover:text-white text-slate-400 transition-all duration-200"
                    title="Copy"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>
            <p className="text-slate-300 text-sm leading-7 whitespace-pre-wrap font-light">
                {content}
            </p>
        </div>
    );
};
export default ResponseCard;