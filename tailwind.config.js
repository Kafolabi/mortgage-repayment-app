/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      fontFamily: {
        serif: ["Plus Jakarta Sans", "serif"],
      },
      colors: {
        main: "#e3f3fd",
        lime: "hsl(61, 70%, 52%)",
        limelight: "hsl(60, 72%, 93%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        slate300: "hsl(203, 41%, 72%)",
        slate500: "hsl(200, 26%, 54%)",
        slate700: "hsl(200, 24%, 40%)",
        slate900: "hsl(201, 54%, 16%)",
      },
    },
  },
  plugins: [],
};
