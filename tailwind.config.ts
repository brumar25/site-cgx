import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta base do redesign (template Analitix adaptado à identidade CGX)
        ink: {
          950: '#060A26',
          900: '#0B1240',
          800: '#141C56',
          700: '#232C6B',
        },
        cgx: {
          blue: '#2563EB',
          cyan: '#06B6D4',
          green: '#22C55E',
        },
        cloud: {
          50: '#F7F9FE',
          100: '#F0F4FC',
          200: '#E3EAF8',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-mulish)', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.35), 0 0 60px rgba(6, 182, 212, 0.12)',
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.35), 0 0 60px rgba(37, 99, 235, 0.12)',
        card: '0 10px 40px rgba(11, 18, 64, 0.10)',
        'card-lg': '0 24px 80px rgba(11, 18, 64, 0.18)',
      },
    },
  },
  plugins: [],
}

export default config
