const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      lightBlue: colors.sky,
      blue: colors.blue,
      gray: colors.gray,
      blueGray: colors.blueGray,
      white: colors.white,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
