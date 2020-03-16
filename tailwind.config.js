module.exports = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      'xs': '0px',
      // => @media (min-width: 0px) { ... }

      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1600px',
      // => @media (min-width: 1600px) { ... }

    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
