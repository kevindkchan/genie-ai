/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ['system-ui', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

