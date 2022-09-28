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
        "dark-transparent": "rgba(73,59,59,0.3)",
        "red-transparent": "rgba(220,9,10,0.52)"
      },
      backgroundImage: {
        "dashboard-bg": `url(/public/images/bg.png)`,
        "trailer-thumbnail": `url(/public/images/video-thumbnail.png)`
      }
    },
  },
  plugins: [],
}