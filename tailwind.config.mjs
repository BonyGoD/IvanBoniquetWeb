export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        "accent-red": "#e53e3e",
        "background-light": "#f7f7f7",
        "background-dark": "#191919",
        "neutral-gray": "#a3a3a3",
        "off-white": "#f5f5f5",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}