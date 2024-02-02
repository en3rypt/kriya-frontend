/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background-color":"#142035",
        "text-color":"#2CC9A7",
        "text-color2":"#2074b5",
        "text-color3":"#187909",
        "gradient1":"#28D2AF",
        "gradient2":"#1D55B6"
      },
      fontFamily: {
        "Montserrat":["Montserrat","sans"]
      },
    },
  },
  plugins: [],
}