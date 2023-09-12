/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Hanken", "sans"]
      },
      colors: {
        'lightRed' : 'hsl(0, 100%, 67%)',
        'lighterRed' : 'hsla(0, 100%, 67%, 0.19)',
        'orangeyYellow': 'hsl(39, 100%, 56%)',
        'lightorangeyYellow': 'hsla(39, 100%, 56%, 0.19)',
        'greenteal': 'hsl(166, 100%, 37%)',
        'lightgreenteal': 'hsl(166, 100%, 37%, 0.19)',
        'cobaltblue': 'hsl(234, 85%, 45%)',
        'lightSlateBlue': 'hsl(252, 100%, 67%)',
        'lightRoyalBlue': 'hsl(241, 81%, 54%)',
        'violetBlue': 'hsla(256, 72%, 46%, 1)',
        'persianBlue': 'hsla(241, 72%, 46%, 0)',
        'paleBlue': 'hsl(221, 100%, 96%)',
        'lightLavender': 'hsl(241, 100%, 89%)',
        'darkGrayBlue': 'hsl(224, 30%, 27%)'
      },
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}
