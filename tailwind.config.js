/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      
      backgroundImage:{
        banner: "url('/src/assets/banner-2.jpg')",
        newsletter: "url('/src/assets/newsletter.jpg')",
        errorBanner: "url('/error-page.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
    {daisyui: {
      themes: ['light', 'dark'],
    }},
  ],
}