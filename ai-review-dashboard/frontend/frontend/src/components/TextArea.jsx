import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-20 group-hover:opacity-50 transition duration-500 blur"></div>
            <div className="relative">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                    Input Review
                </label>
                <textarea
                    className="w-full h-64 bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 text-slate-200 
            focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent 
            transition-all placeholder-slate-600 resize-none text-base leading-relaxed shadow-xl"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-mono">
                    {value.length} chars
                </div>
            </div>
        </div>
    );
};
export default TextArea;