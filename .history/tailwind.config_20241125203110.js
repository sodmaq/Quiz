/** @type {import('tailwindcss').Config} */
import { Flowbite } from "flowbite-react";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
    },
  },
  plugins: [Flowbite.plugins()],
};