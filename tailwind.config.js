/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary : '#14b8a6',
      },
      backgroundImage: {
        'dark-section' : "url('/dist/img/lookin.png')",
        'hero-section' : "url('/dist/img/lookout.png')",
        'hero-fixed' : "url('/dist/img/dalle.png')",
        'hero-expand' : "url('/dist/img/expand.png')",
        'hero-expand1' : "url('/dist/img/expand3.png')"
      },

      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}



