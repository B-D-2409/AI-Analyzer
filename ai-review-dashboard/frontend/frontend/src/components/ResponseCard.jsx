import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ResponseCard = ({ title, content }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 hover:border-brand-500/50 transition-all duration-300 group">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-brand-500 font-bold text-sm uppercase tracking-wider">{title}</h3>
                <button
                    onClick={handleCopy}
                    className="text-slate-500 hover:text-white transition-colors p-1 rounded-md hover:bg-dark-700"
                    title="Copy to clipboard"
                >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                {content}
            </p>
        </div>
    );
};

export default ResponseCard;