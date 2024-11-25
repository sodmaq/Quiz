/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite..],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
    },
  },
  plugins: [flowbite],
};
