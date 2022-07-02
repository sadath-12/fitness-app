/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'themeYellow': '#F6911D',
        'darkYellow': '#ee8105',
      },
    },
    plugins: [],
  }
}
