/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#C4B5FD",
        white: {
          100: "#FFFFFF",
          200: "#f5edf7",
          DEFAULT: "#FFFFFF",
        },
        blue: {
          100: "#3730A3",
          200: "#191970",
          300: "#1f31ab",
          400: "#3348d4",
          500: "#4053cf",
          600: "#0f2299",
          700: "#588fe8",
          800: "#010142",
          900: "#000033",

          DEFAULT: "#1E293B",
        },
        gray: {
          100: "#DCDCDC",
          200: "#8c95a3",
        },
        gradient: {
          100: "#fee6ed",
          200: "#ebc7f9",
          300: "#a3c6f1",
        },
        black: {
          300: "#636569",
          400: "#37383b",
          500: "#161617",
          DEFAULT: "#000000",
        },
        red: {
          100: "#e3292c",
        },
        pink: {
          100: "#af8bb5",
          200: "#9a64a3",
        },
      },
    },
  },
  plugins: [],
};
