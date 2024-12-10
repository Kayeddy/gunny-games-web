const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorant: ["VALORANT", "sans-serif"],
        insomnia: ["Insomnia", "sans-serif"],
        sen: ["Sen", "sans-serif"],
        pricedown: ["Pricedown", "sans-serif"],
      },
      colors: {
        fuzzy: {
          borderColor: "#FFB462",
          backgroundColor: "#DCDCDC", // gainsboro-like color
          badgeColor: "#DCDCDC",
        },
        rocky: {
          borderColor: "#E3AB55",
          backgroundColor: "#E3AB55",
          badgeColor: "#E3AB55",
        },
        taily: {
          borderColor: "#FFE47C",
          backgroundColor: "#2EAA8E",
          badgeColor: "#5797D1",
        },
        bolty: {
          borderColor: "#484A4B",
          backgroundColor: "#CAA238",
          badgeColor: "#FED53A",
        },
        blaze: {
          borderColor: "#AA2291",
          backgroundColor: "#C5602B",
          badgeColor: "#E52931",
        },
      },
      backgroundImage: (theme) => ({
        "fuzzy-title": "linear-gradient(to right, #FFE765, white)",
        "rocky-title": "linear-gradient(to right, #FEAE4F, #A6585C)",
        "taily-title": "linear-gradient(to right, #0EB75A, #41A1AD)",
        "bolty-title": "linear-gradient(to right, #FED53A, #9D97BD)",
        "blaze-title": "linear-gradient(to right, #F87E2F, #E52931)",
      }),
      animation: {
        move: "move 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-custom-shape": {
          clipPath:
            "polygon(0% 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, 50px 100%, 0% calc(100% - 50px))",
        },
      };
      addUtilities(newUtilities);
    },
    addVariablesForColors,
    nextui(),
    require("daisyui"),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
