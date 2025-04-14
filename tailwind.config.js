/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4169e1", // 로열 블루
        secondary: "#FFC107", // 배드민턴 셔틀콕 노란색
      },
    },
  },
  plugins: [],
};
