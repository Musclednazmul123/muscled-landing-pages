/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl_2: { min: "1440px"},
      },
      colors: {
        "accent-white": "#F9F9F9",
        "white-gray": "#D9D9D9",
        "white-bluish": "#F2F6FC",
        "white-70": "#FFFFFFB2",
        "black-50": "#00000080",
        "black-80": "#000000CC",
        "black-70": "#000000B2",
        "black-footer": "#141010",
        "bold-red": "#C40000",
        "red-12": "#C400001F",
        "red-10": "#C400001A",
        "red-9": "#C4000017",
        "red-6": "#C400000F",
        "red-3": "#C4000008",
        "red-base":"#C40000",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        slide: "slide 500ms ease-in-out",
        slideUp: "slideUp 250ms ease-in-out forwards",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateY(-1%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
            maxHeight: "fit-content",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(0%)",
            opacity: "1",
            maxHeight: "300px",
          },
          to: {
            opacity: "0",
            maxHeight: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
