/** @type {import('tailwindcss').Config} */
import { Flowbite } from "flowbite-react";
export default {
  content: [flowbite.content(), "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
    },
  },
  plugins: [Flowbite.plugins()],
};
