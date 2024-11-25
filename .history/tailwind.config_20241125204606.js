/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

import flowbite from "flowbite-react";
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
