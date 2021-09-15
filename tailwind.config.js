const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gbold: ["Gotham Black"],
      book: ["Gotham Book"],
      gotham: ["Gotham Bold"],
    },
    colors: {
      primary: "#3685C9",
      secondary: "#282828",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      blue: colors.blue,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      fontFamily: {
        sans: ["Gotham", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-bg": "url('assets/background/face-home.svg')",
        "body-bg": "url('assets/background/body-tribes.svg')",
      },
    },
  },
  variants: {
    extend: {
      margin: ["hover", "focus"],
      scale: ["hover", "active", "group-hover"],
      animation: ["hover", "focus"],
      translate: ["active", "group-hover"],
      borderWidth: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
