/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // oleo: ["Oleo Script Swash Caps", "cursive"],
      },
      colors: {
        transparent: "transparent",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "0",
        lg: "3rem",
        xl: "5.5rem",
        "2xl": "6.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  corePlugins: {
    preflight: true,
  },
};
