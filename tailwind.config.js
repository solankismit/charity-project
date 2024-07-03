/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{jsx,js}"
  ],
  theme: {
    screens: {
      // Don't need xs since Tailwind uses min-width approach
      // to its media queries.
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      maxWidth: {
        sm: `${540 / 16}rem`,
        md: `${720 / 16}rem`,
        lg: `${960 / 16}rem`,
        xl: `${1140 / 16}rem`,
        xxl: `${1320 / 16}rem`,
      },
      colors: {
        primary: '#f3c614',
        "primary-light":'#f9f3e7',
        "dark-grey": '#384744',
        "medium-grey": '#7c7a75',
      },
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
        oto:['Otomanopee One Regular']
      },
    },
  },
  plugins: [],
}