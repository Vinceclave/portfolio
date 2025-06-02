/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small screen breakpoint
      },
      fontFamily: {
        'luckiest': ['"Luckiest Guy"', 'cursive'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}