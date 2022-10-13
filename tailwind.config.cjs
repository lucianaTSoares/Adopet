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
        icon: {
          white: "#fcf0e3",
        },
        background: {
          primary: "#36D6AD",
          secondary: "#3772FF",
        },
      },
      boxShadow: {
        input: "0px 2px 2px rgba(0, 0, 0, 0.15)",
      },
    },
    maxHeight: {
      mobile: "70vh",
    },
    maxWidth: {
      mobile: "90%",
    },
  },
  plugins: [],
};
