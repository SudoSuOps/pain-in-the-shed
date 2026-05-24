/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 900: '#0a0a0a', 800: '#161616', 700: '#262626', 600: '#3a3a3a', 500: '#525252' },
        gold: { DEFAULT: '#d4a017', 300: '#f0cf66', 400: '#e3b73d', 500: '#d4a017', 700: '#7a5b0d', 800: '#5a3e00', 900: '#3d2a00' },
        cream: { 50: '#fdfcf7', 100: '#faf8ed', 200: '#f7f3e6' },
        honey: { royal: '#e8b923', honey: '#d4a017', jelly: '#b06b00', propolis: '#5a3e00' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
