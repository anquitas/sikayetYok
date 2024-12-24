/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,html,js,ts,jsx,tsx}",
    "./index.html"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

