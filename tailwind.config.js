/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                serif: ['Baskervville', 'Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'serif'],
                'serif-alt': ['Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'serif'],
                'heading': ['Baskervville', 'Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'serif'],
                'body': ['Baskervville', 'Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'serif'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                highlight: {
                    1: "var(--highlight-1)",
                    2: "var(--highlight-2)",
                    3: "var(--highlight-3)",
                    4: "var(--highlight-4)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" }
                },
                "shimmer": {
                    "0%": { backgroundPosition: "200% 0" },
                    "100%": { backgroundPosition: "-200% 0" }
                },
                "pulse-slow": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.8 }
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "gradient-x": "gradient-x 15s ease infinite",
                "shimmer": "shimmer 5s linear infinite",
                "pulse-slow": "pulse-slow 4s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(75, 75, 85, 0.3)',
                'glow-md': '0 0 20px rgba(60, 60, 75, 0.4)',
                'glow-lg': '0 0 30px rgba(50, 50, 65, 0.5)',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        lineHeight: '1.7',
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} 