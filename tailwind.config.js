/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
  {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'header': "url('https://www.atelier-db.fr/img/photo-piano-bg.jpg')"
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        colors: {
          'primary': '#8F704D',
          'grey': '#27272a',
          'body': '#0a0a0a',
          'border': '#404040',
          'whitegrey': '#A9A9A9',
        },
        width: {
          "48p": "48%",
        },
        minHeight: {
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          '200px': '200px',
        }
      },
    },
    plugins: [],
  },
)

