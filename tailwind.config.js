/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    "./src/**/*.{vue,html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

