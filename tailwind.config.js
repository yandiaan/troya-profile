const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
        sans: ["Gotham", "Montserrat", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
      backgroundImage: {
        "hero-bg": "url('assets/background/face-home.webp')",
        "body-bg": "url('assets/background/body-tribes.webp')",
        grt: "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        pattern1: "url('assets/pattern/pattern1.svg')",
      },
    },
  },
  variants: {
    extend: {
      margin: ["hover", "focus"],
      scale: ["hover", "active", "group-hover"],
      display: ["hover", "focus", "group-hover"],
      animation: ["hover", "focus", "group-hover"],
      translate: ["active", "group-hover"],
      width: ["hover", "focus", "group-focus"],
      borderWidth: ["hover", "focus", "group-hover"],
      backgroundImage: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
