/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    keyframes: {
      flicker: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.4' },
      },
    },
    animation: {
      flicker: 'flicker 2s infinite',
    },
  },
// tailwind.config.js
extend: {
  boxShadow: {
    'neon-cyan': '0 0 15px #22d3ee',
    'neon-blue': '0 0 15px #3b82f6',
  },
  animation: {
    flicker: 'flicker 2s infinite',
  },
  keyframes: {
    flicker: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.4' },
    },
  },
}
  
}