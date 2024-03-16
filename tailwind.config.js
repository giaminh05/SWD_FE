/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        modal: "#18181b",
      },
      screens: {
        xxs2: "225px",
        xxs: "325px",
        xs: "475px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
