/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackgroiund: "#0f172a",
        customSoft: "#293548",
        customVerySoft: "#2d4258",
        customText: "#e2e8f0",
      },
      borderWidth: {
        1: "1.5px",
      },
    },
  },
  plugins: [],
};
