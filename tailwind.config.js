/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-medium": "spin 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
