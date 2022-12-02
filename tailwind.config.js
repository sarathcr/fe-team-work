/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        400: "400px",
      },
      colors: {
        primary: "#0e84db",
        secondary: "#eeeeee",
        teritiary: "#035794",
      },
      borderColor: {
        lg: "30px",
      },
      padding: {
        30: "30px",
      },
      fontFamily: {
        primary: "Montserrat, sans-serif",
        secondary: "Comic Neue', cursive",
      },
    },
  },
  plugins: [],
};
