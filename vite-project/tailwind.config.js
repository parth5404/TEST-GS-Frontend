/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        edu: ['"Edu SA Beginner"', 'cursive'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};