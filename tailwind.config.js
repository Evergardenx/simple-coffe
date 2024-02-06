/* eslint-disable import/no-anonymous-default-export */
// /* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "DM Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
