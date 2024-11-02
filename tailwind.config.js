/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackgroiund: "#030014",
      },
      borderWidth: {
        1: "1.5px",
      },
    },
  },
  plugins: [],
};
