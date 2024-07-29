/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  
    extend: {
      fontFamily: {
        Lato: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#051627',
        'secondary': '#192039'
      }
    },
  },
  plugins: [],
}

