/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary1: "var(--primary1)", // Reference CSS variable
        primary2: "var(--primary2)",
      },
    },
  },
  plugins: [],
};
