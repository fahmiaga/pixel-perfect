/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumGray: '#828282',
        primaryBlue: '#2f80ed',
        lightBlue: '#8785ff',
        primaryWhite: '#e0e0e0',
        lightGray: '##C4C4C4',
        lightRed: '#F9E0FD',
        lightPurple: '#EEDCFF'
      }
    },
  },
  plugins: [
    require('tailwindcss-animatecss')
  ],
}
