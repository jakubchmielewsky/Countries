/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        c: {
          "dark-blue-elements": "hsl(209, 23%, 22%)",
          "very-dark-blue-bg": "hsl(207, 26%, 17%)",
          "very-dark-blue-text": "hsl(200, 15%, 8%)",
          "dark-gray-input": "hsl(0, 0%, 52%)",
          "very-light-gray-bg": "hsl(0, 0%, 98%)",
          gray: {
            111517: "#111517",
            80: "#808080",
            b2: "#B2B2B2",
            c4: "#C4C4C4",
            fa: "#FAFAFA",
          },
        },
      },
      boxShadow: {
        md: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;",
        "custom-small": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        "custom-big":
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        base: "14px",
        lg: "16px",
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },

      screens: {
        tablet: "640px",
        "tablet-lg": "900px",
        desktop: "1025px",
        "desktop-lg": "1200px",
      },
    },
  },
  plugins: [],
};
