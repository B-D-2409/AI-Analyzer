import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-slate-400 mb-2">
                Paste Customer Review
            </label>
            <textarea
                className="w-full h-48 bg-dark-800 border border-dark-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-600 resize-none"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default TextArea;