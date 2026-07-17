/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0B0B0B',
        'maroon': '#2B0A0A',
        'gold': '#C9A84C',
        'ivory': '#FDF8F0',
        'champagne': '#E8D8B5',
        'soft-gold': '#E5C76B'
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
        'glass': '0 8px 32px rgba(0,0,0,0.25)',
        'glass-hover': '0 20px 50px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'envelope-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      }
    },
  },
  plugins: [],
}
