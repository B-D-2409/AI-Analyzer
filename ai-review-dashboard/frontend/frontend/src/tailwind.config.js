export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#0f172a', 
                    800: '#1e293b',
                    700: '#334155', 
                },
                brand: {
                    500: '#10b981', 
                    600: '#059669',
                }
            }
        },
    },
    plugins: [],
}