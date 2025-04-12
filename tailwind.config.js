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
      colors: {
        foreground: {
          DEFAULT: "#f5f5f5",      
          60: "rgba(245, 245, 245, 0.6)",
          55: "rgba(245, 245, 245, 0.55)",
          90: "rgba(245, 245, 245, 0.9)",
        },
      },
    },
  },
  plugins: [],
}

