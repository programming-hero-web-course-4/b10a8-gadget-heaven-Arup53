const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        custom: "#9538e2",
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
