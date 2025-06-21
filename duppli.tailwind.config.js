/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans", sans-serif'],
      },
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1.5rem",
    //     sm: "0",
    //     lg: "3rem",
    //     xl: "5.5rem",
    //     "2xl": "6.5rem",
    //   },
    // },

    colors: {
      transparent: "transparent",
      primary: "#c8102e",
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
