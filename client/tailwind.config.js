/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        light: "FFFFFF",
      },
    },
  },
  darkMode: "class",
  // plugins: [require("daisyui")],
  plugins: "",
};
