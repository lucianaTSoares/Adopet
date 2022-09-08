/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        button: {
          default: "#FC7071",
          hover: "#FF9D9E",
        },
        primary: "#36D6AD",
        secondary: "#3772FF",
      },
    },
    screens: {
      'xsm': "360px",
    },
  },
  plugins: [],
};
