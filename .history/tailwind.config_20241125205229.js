// /** @type {import('tailwindcss').Config} */
// const flowbite = import("flowbite-react/tailwind");

// // import flowbite from "flowbite-react";
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}]", flowbite.content()],
//   theme: {
//     extend: {
//       fontFamily: {
//         libre: ['"Libre Baskerville"', "serif"],
//       },
//     },
//   },
//   plugins: [flowbite.plugin()],
// };

const flowbite = import("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
