/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'animate-aurora',
    'animate-float',
    'animate-float-slow',
    'animate-float-fast',
    'animate-sparkle',
    'animate-glow-underline',
    'animate-pulse-glow',
    'animate-vignette-pulse',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};