/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('/src/assets/banner-2.jpg')",
        errorBanner: "url('/error-page.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}