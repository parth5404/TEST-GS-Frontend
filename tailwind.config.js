/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'base-100': '#0D0D0D',
        'base-200': '#1A1A1A',
        'base-300': '#2A2A2A',
        'base-content': '#E0E0E0',
        'primary': '#D4AF37',
        'secondary': '#B8860B',
        'accent': '#FFD700',
        'neutral': '#1A1A1A',
        'info': '#3ABFF8',
        'success': '#36D399',
        'warning': '#FBBD23',
        'error': '#F87272',
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
