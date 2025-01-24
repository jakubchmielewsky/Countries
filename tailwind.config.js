/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        c: {
          'dark-blue-elements': 'hsl(209, 23%, 22%)',
          'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
          'very-dark-blue-text': 'hsl(200, 15%, 8%)',
          'dark-gray-input': 'hsl(0, 0%, 52%)',
          'very-light-gray-bg': 'hsl(0, 0%, 98%)',
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        base: '14px',
        lg: '16px',
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },

      screens: {
        'tablet': '640px',
        'desktop': '1025px',
      },
    
    },
  },
  plugins: [],
}

