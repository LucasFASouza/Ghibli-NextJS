module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#1eB9ef',
        }
      },
      fontFamily: {
        'ghibli':['Spartan', 'Open Sans', 'ui-sans-serif'],
      },
      boxShadow: {
        card: '0px 0px 15px 0px rgba(0,0,0,0.25)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
