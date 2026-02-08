import React from 'react';

const Button = ({ onClick, children, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={`
        relative w-full group overflow-hidden rounded-xl p-[1px] transition-all duration-300
        ${loading ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02] active:scale-[0.98]'}
        `}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full bg-dark-900 rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-colors group-hover:bg-dark-900/90">
                {loading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="font-semibold text-white tracking-wide">AI Processing...</span>
                    </>
                ) : (
                    <span className="font-bold text-white tracking-wide text-lg flex items-center gap-2">
                        {children}
                    </span>
                )}
            </div>
        </button>
    );
};
export default Button;