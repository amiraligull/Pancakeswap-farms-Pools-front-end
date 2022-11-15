/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // sm: "640px",
      // sm2: "540px",
      // md: "768px",
      // // tab: "768px",

      // lg: "1024px",
      // xl: "1280px",
      // "2xl": "1536px",
      sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "1024px",
      // => @media (min-width: 960px) { ... }

      lg: "1280px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      // body background
      white: "#F5F5F5",
      white2: "#ffffff",

      // button and typography
      blue: "#0066FF",
      // trending ,partner, simple effective
      lightBlue: "#EBF5FF",
      // nav
      navblue: "#2128BD",
      // news
      lightwhite: "#DCDCDC2B",
      // herotext
      purple: "#130F49",
      orange: "#FF5E00",
      // black: "#0F1C49",
      // dark: "#000000",
      // slati: "#242A44",
      slati: "#171717",
      green: "#13ce66",
      red: "#FF0000",
      black: "#222222",
      inputcolor: "#D4D8E666",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
