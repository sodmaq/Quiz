/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
    },
  },
  plugins: [flowbite],
};
