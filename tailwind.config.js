/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'base-100': '#1d232a',
        'base-200': '#191e24',
        'base-300': '#15191e',
        'base-content': '#A6ADBB',
        'primary': '#3abff8',
        'secondary': '#828df8',
        'accent': '#f471b5',
        'neutral': '#191e24',
        'info': '#3abff8',
        'success': '#36d399',
        'warning': '#fbbd23',
        'error': '#f87272',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        maxContent: '1260px',
        maxContentTab: '650px',
      },
    },
  },
  plugins: [],
};
