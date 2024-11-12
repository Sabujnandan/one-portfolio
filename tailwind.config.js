/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
      '164': '164vh',
      '134': '134vh',
      '150': '150vh',
      '120': '120vh',
      '115' : '115vh',
      '47' : '47%',
    },
    gap:{
      '150' : '150px'

    },
    screens: {
      'my': '374px',
      // => @media (min-width: 992px) { ... }
    },
  },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}

