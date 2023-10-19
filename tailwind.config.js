/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        primary: '#DA458F',
        yellow: '#FFCC21',
        neutral: '#89888B',
        slate: '#3A3841'
      },
    },
  },
  plugins: [],
}
