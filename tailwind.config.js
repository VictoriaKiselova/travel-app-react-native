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
          DEFAULT: "#FFFFFF",
        },
        blue: {
          100: "#3730A3",
          200: "#191970",
          500: "#1E293B",
          900: "#000033",
          DEFAULT: "#1E293B",
        },
        gray: {
          100: "#DCDCDC",
        },
        gradient: {
          100: "#fee6ed",
          200: "#ebc7f9",
          300: "#a3c6f1",
        },
      },
    },
  },
  plugins: [],
};
