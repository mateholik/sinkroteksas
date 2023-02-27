/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222E50",
        secondary: "#FEC10E;",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
