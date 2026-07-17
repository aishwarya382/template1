/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-ivory': '#FDFBF7',
        'champagne-gold': '#D8B98A',
        'rose-gold': '#B76E79',
        'warm-beige': '#EADBC8',
        'refined-ivory': '#FDFBF7',
        'matte-gold': '#D4AF37',
        'champagne': '#F7E7CE',
        'deep-burgundy': '#8B3A4A',
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 25px 80px rgba(0,0,0,0.18)',
      },
      backgroundImage: {
        'envelope-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      }
    },
  },
  plugins: [],
}
