const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          1000: 'rgb(var(--color-primary-1000) / <alpha-value>)',
          1200: 'rgb(var(--color-primary-1200) / <alpha-value>)',
        },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        purple: colors.purple,
      },
    },
  },
  plugins: [],
}
