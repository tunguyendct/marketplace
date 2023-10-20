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
        slate: '#3A3841',
      },
      backgroundImage: {
        epic: 'linear-gradient(to right,#DD5AFE,#6366F1)',
        common: 'linear-gradient(to right,#49DD81,#22B4C6)',
        rare: 'linear-gradient(to right,#43A6F6,#5868F3)',
        legendary: 'linear-gradient(to right,#FE955A,#F1DA63)',
        mythic: 'linear-gradient(to right,#FE5A5A,#F163D2)',
      },
    },
  },
  plugins: [],
}
