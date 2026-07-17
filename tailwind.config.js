/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'maroon': '#5A0F1B',
        'maroon-dark': '#450a0a',
        'crimson': '#991b1b',
        'ivory': '#FDFBF7',
        'bg-light': '#ffffff',
        'bg-red': '#ffffff',
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 25px 80px rgba(0,0,0,0.18)',
        'glass-light': '0 8px 32px rgba(31,31,31,0.1)',
        'glass-hover': '0 20px 50px rgba(31,31,31,0.15)'
      },
      backgroundImage: {
        'envelope-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      }
    },
  },
  plugins: [],
}
