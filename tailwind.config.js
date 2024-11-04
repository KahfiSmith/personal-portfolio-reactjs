/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackgroiund: "#0f172a",
        customSoft: "#18223B",
        customVerySoft: "#FF6C39",
        customText: "#cbd5e1",
        customTextv2: "#F7F8FC",
      },
      borderWidth: {
        1: "1.5px",
      },
    },
  },
  plugins: [],
};
