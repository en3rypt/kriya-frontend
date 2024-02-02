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
        "text-color":"#2CC9A7"
      }
    },
  },
  plugins: [],
}