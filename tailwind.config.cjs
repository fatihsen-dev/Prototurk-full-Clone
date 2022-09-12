/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#18191a",
        mainWhite: "#f3f6f9",
        darkTwo: "#1f2021",
        darkThree: "#18191a",
        darkFour: "#202123",
        darkFive: "#2c2e30",
        mainBlue: "#2d88ff",
        mainGray: "#32445a",
        darkBlueTwo: "#1a222c",
        darkBlueThree: "#5e7a9e0d",
        darkBlue: "#23266b",
        darkBorder: "#393a3b",
        lightGreen: "#edf7ed",
        html: "#e54d27",
        css: "#29a4d9",
        javascript: "#f7df1e",
        php: "#7478ae",
        mysql: "#4479a1",
        laravel: "#ff2d20",
        python: "#3372a5",
        git: "#f74e28",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
