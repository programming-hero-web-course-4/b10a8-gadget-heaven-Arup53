/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#9538e2",
      },
      backgroundImage: {
        banner: "url(./assets/banner.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
