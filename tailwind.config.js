/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColor: '#1A73E8',
        textColorDark:'#1A202C'
      },
      fontFamily: {
        inter:['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

