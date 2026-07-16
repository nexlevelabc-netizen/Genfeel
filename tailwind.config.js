/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#0a0a0a',
        'matte-light': '#111111',
        'matte-card': '#1a1a1a',
        'matte-border': 'rgba(255, 255, 255, 0.06)',
        cream: '#faf8f3',
        'cream-dark': '#f3efe6',
        ink: '#0a0a0a',
        'ink-light': 'rgba(10, 10, 10, 0.6)',
        'ink-muted': 'rgba(10, 10, 10, 0.35)',
        accent: '#6366f1',
        'accent-light': '#818cf8',
        'accent-pink': '#ec4899',
        'accent-cyan': '#06b6d4',
        'white-muted': 'rgba(255, 255, 255, 0.65)',
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        card: '20px',
        button: '12px',
        pill: '100px',
        subtle: '8px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: '0 4px 24px rgba(0, 0, 0, 0.2)',
        elevated: '0 12px 48px rgba(0, 0, 0, 0.35)',
        glow: '0 0 40px rgba(99, 102, 241, 0.2)',
        'glow-pink': '0 0 40px rgba(236, 72, 153, 0.15)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.15)',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        'section': '120px',
        'section-tight': '80px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 8px rgba(99, 102, 241, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 30s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pulse-glow': 'pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
