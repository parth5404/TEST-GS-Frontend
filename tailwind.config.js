/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'base-100': '#1c1d1f',
        'base-200': '#2d2f31',
        'base-300': '#3e4143',
        'base-content': '#f7f9fa',
        'primary': '#a435f0',
        'secondary': '#8710d8',
        'accent': '#f471b5',
        'neutral': '#2d2f31',
        'info': '#3abff8',
        'success': '#36d399',
        'warning': '#fbbd23',
        'error': '#f87272',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        maxContent: '1260px',
        maxContentTab: '650px',
      },
    },
  },
  plugins: [],
};
