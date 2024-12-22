/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('/src/assets/banner-2.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}