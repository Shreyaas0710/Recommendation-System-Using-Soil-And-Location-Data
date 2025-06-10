/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3be',
          300: '#8ecd95',
          400: '#5eb068',
          500: '#3c9346',
          600: '#2c7635',
          700: '#255e2c',
          800: '#214b26',
          900: '#1d3d22',
          950: '#0f2213',
        },
        secondary: {
          50: '#f6f7f1',
          100: '#e6e9d9',
          200: '#cdd5b4',
          300: '#b0bc89',
          400: '#96a367',
          500: '#788448',
          600: '#5f6a39',
          700: '#4c5431',
          800: '#3e462c',
          900: '#353c28',
          950: '#1a1e12',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};