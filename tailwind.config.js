const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        //custom heights added for smoother development
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        190: '47.5rem',
        240: '60rem',
        256: '62rem',
        300: '73rem',
        325: '79rem',
        350: '85rem'
      },

      //custom width added for smoother development
      width: {
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        190: '47.5rem',
        240: '60rem',
        256: '62rem',
        300: '73rem',
        325: '79rem',
        350: '85rem'
      },
      
      //custom color palette added
      colors: {
        silverPink: '#C9ADA7',
        HeliotropeGray: '#9A8C98',
        Cream: 'F2E9E4',
        Independence: '#4A4E69'
      },

      //changed animation settings
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite'
       },


       spacing: {
        88: '22rem',
        333: '33.33%',
       },
    },
    
  },
  variants: {

    animation: [
      'responsive', 'motion-safe', 'motion-reduce'
    ],

  },
  plugins: [],
}
