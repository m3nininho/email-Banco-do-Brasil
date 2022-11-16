/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
      width: {
        '128': '40rem'
      }
    },
    colors: {
      textColorDefault: '#465eff',
      bgColorDefault: 'rgb(241, 241, 241)',
      bgColorContent: '#fff',
    },
   
  },
  plugins: [],
}
