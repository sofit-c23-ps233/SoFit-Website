/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      brand: '#617A55',
      second: '#A3D0A4',
      third: '#F7E1AE',
      soft: '#FFF8D6',
      white: '#ffffff',
      black: '#000000',
    },
    screens: {
      xs: '430px',

      s: '500px',

      sm: '576px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1400px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

