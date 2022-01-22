module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '3rem'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
