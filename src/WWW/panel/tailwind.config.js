/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      'content-body': "1440px"
    },
    extend: {
      colors: {
        dark: "#101010",
      },
      backgroundImage: {
        "car": `url(/public/images/bg.png)`
      }
    },
  },
  plugins: [],
}