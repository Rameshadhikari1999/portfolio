/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  
    extend: {
      fontFamily: {
        Lato: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'primary': '#051627',
        'secondary': '#192039',
        'accent': {
          DEFAULT: '#6366f1', // Indigo 500
          light: '#818cf8',
          dark: '#4f46e5',
        },
        'violet': '#8b5cf6',
        'cyan': '#06b6d4',
        'glass': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

