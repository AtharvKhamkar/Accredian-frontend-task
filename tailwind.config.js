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
        textColorDark: '#1A202C',
        textColorGray: '#4B4B4B',
        referSectionBg:'#EEF5FF'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

