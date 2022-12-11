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
        "dark": "#101010",
        "gray": "#a3a3a3",
        "dark-brown": "#212121",
        "black-opacity-70": "rgba(0, 0, 0, 0.7)",
        "dark-transparent": "rgba(73,59,59,0.3)",
        "red-transparent": "rgba(220,9,10,0.52)",
        "dark-line": "#3d3d3d",
        "level-fill-line": "#131313",
        "accounts-from-rgba": "rgba(35,35,36)",
      },
      backgroundImage: {
        "dashboard-bg": `url(/public/images/bg.png)`,
        "trailer-thumbnail": `url(/public/images/video-thumbnail.png)`
      }
    },
  },
  plugins: [],
}