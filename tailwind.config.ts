import type { Config } from 'tailwindcss';

// Design tokens for the Optician site. This file is the source of truth
// for brand colour, type and spacing — extend it rather than hard-coding
// one-off values in components.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F3EC',
          50: '#FDFCFA',
          100: '#F7F3EC',
          200: '#EFE7D8',
        },
        ink: {
          DEFAULT: '#1B2420',
          700: '#2A362F',
          500: '#4A5A50',
        },
        sage: {
          50: '#EEF2ED',
          100: '#DCE5D9',
          300: '#9CB39A',
          500: '#5C7A5A',
          700: '#3E5A3C',
        },
        terracotta: {
          DEFAULT: '#BF5B3A',
          600: '#A94E30',
          700: '#8F4127',
        },
        stone: {
          400: '#8A8578',
          600: '#615C4F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-lg': ['clamp(2.75rem, 4vw + 1.5rem, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-md': ['clamp(2.25rem, 5vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '38ch',
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(27, 36, 32, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
