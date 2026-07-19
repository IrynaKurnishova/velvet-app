/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './app/pages/**/*.vue',
    './app/components/**/*.vue',
    './app/layouts/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      colors: {
        gold: '#C9A96E',
        dark: '#0D0D0D',
        cream: '#F5EDD8',
      },
    },
  },
  plugins: [],
}
