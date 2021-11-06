module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {
      colors: {
        orange: '#FE7D27',
        darkGreen:'#007AA5'
      },
      fontFamily: {
        poppins:['poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
