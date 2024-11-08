import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily, 
        geist: ["Geist", "sans-serif", "system-ui"],
        lora: ["Lora", "sans-serif"],
      },
      colors: {
        customBackground: "#0f172a",
        customSoft: "#30384f",
        customVerySoft: "#334155",
        customText: "#cbd5e1",
        customTextV2: "#F7F8FC",
        customTextV3: "#7dd3fc",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      borderWidth: {
        1: "1.5px",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
