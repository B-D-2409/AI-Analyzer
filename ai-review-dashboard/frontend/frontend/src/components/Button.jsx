import React from 'react';

const Button = ({ onClick, children, loading, variant = 'primary' }) => {
    const baseStyle = "w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex justify-center items-center gap-2";

    const variants = {
        primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20",
        secondary: "bg-dark-700 hover:bg-dark-600 text-slate-200 border border-dark-600",
    };

    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={`${baseStyle} ${variants[variant]} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
            {loading ? (
                <span className="animate-pulse">Processing...</span>
            ) : children}
        </button>
    );
};

export default Button;