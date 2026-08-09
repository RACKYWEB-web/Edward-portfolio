/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0F0D0A',
          900: '#14120F',
          800: '#1D1A15',
          700: '#28241C',
        },
        ivory: {
          50: '#FAF7F0',
          100: '#F3EDE0',
          200: '#E9E0CC',
        },
        bronze: {
          300: '#DEC08A',
          400: '#CBA268',
          500: '#B08D57',
          600: '#8C6E3F',
        },
        emerald: {
          500: '#2F4F43',
          600: '#25392F',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(22px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(10px,-14px,0)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16,1,0.3,1) both',
        driftSlow: 'driftSlow 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
