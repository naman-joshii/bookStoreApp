/** @type {import('tailwindcss').Config} */
// module.exports = {
  
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  
});