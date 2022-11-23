// let colors = JSON.parse(window.localStorage.getItem('colors'));
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D9D9D9',
        // secondary: {
        //   200: '#222',
        //   600: '#3C2',
        // },
        secondary: {
          200: '#3C7195',
          600: '#284B63',
        },
        dark: '#353535',
        back : '#FFFFFF'
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
