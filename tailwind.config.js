/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1E",
        secondary: "#2C2C2E",
        tertiary: "#3A3A3C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-btn-light":
          "4px 4px 0px 0px #3A3A3C, inset 1px 1px 0 0 #000, inset -1px -1px 0 0 #000",
        "custom-btn-dark":
          "4px 4px 0px 0px #2C2C2E, inset 1px 1px 0 0 #000, inset -1px -1px 0 0 #000",
      },
    },
  },
  plugins: [],
};
