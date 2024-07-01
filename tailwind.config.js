/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3c614',
        "primary-light":'#f9f3e7',
        "dark-grey": '#384744',
        "medium-grey": '#7c7a75',
      },
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}