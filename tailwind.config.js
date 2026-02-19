/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1392ec",
                "background-light": "#f6f7f8",
                "background-dark": "#101a22",
                "slate-900": "#101a22", // Override default slate-900 with user's background-dark if appropriate, but keeping it as a base is safer. Actually, user uses background-dark as bg.
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "sans": ["Manrope", "sans-serif"], // Override sans to use Manrope everywhere
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            animation: {
                'float': 'float 5s ease-in-out infinite',
                'float-delayed': 'float-delayed 7s ease-in-out infinite',
                'ticker': 'ticker 30s linear infinite',
            },
            keyframes: {
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                'float-delayed': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
