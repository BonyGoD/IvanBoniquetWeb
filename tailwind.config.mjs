export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#0b0b0b",
        primary: "#111111",
        "card-dark": "#161616",
        "accent-red": "#e11d48",
        "muted-grey": "#9ca3af",
      },
    },
  },
  plugins: [],
};