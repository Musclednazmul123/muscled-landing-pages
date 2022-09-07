/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-white": "#F9F9F9",
        "white-gray": "#D9D9D9",
        "white-bluish": "#F2F6FC",
        "white-70": "#FFFFFFB2",
        "black-50": "#00000080",
        "black-80": "#000000CC",
        "black-70": "#000000B2",
        "black-footer": "#141010",
        "red-12": "#C400001F",
        "red-10": "#C400001A",
        "red-9": "#C4000017",
        "red-6": "#C400000F",
        "red-3": "#C4000008",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      padding: {
        25: "100px",
      },
      fontSize: {
        56: "56px",
        md: "16px",
      },
      margin: {
        21: "84px",
        10: "10px",
        20: "20px",
        30: "30px",
        21: "84px",
      },
    },
  },
  plugins: [],
};
