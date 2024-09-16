/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['itc_avant_garde_gothic', ...defaultTheme.fontFamily.sans],
        almost_there_numeric: ['almost_there_numeric', 'sans-serif'],
        aurek_besh: ['aurek_besh', 'sans-serif'],
        aurek_besh_narrow: ['aurek_besh_narrow', 'sans-serif'],
        clynese_hand: ['clynese_hand', 'sans-serif'],
        orbitron: ['orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
