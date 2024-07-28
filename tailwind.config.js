/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'tr-50': '10px', // top-right
        'br-50': '10px', // bottom-right
        'bl-50': '10px', // bottom-left
        'tl-50': '10px', // top-left
      },
      // borderBottomRightRadius:{
      //   'br-50': '50px'
      // },
    },
  },
  plugins: [],
}