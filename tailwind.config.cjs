/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0,0%,55%)",
        "very-dark-gray": "hsl(0,0%,41%)",
      },
      fontFamily: {
        sans: ["Alata", ...defaultTheme.fontFamily.sans],
        josefin: [
          "Josefin SansVariable",
          "Josefin Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
