/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        themeOrange: "#ef5b36",
        buttonBlue: "#2b67b8",
        buttonBlueDark: "#123564",
      },
      spacing: {
        radioWidth: "15px",
        radioHeight: "15px",
      },
    },
  },
  plugins: [],
};
