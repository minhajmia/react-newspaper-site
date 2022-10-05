/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d14084",

          secondary: "#6437b7",

          accent: "#ed6200",

          neutral: "#16191D",

          "base-100": "#40494F",

          info: "#70D0E6",

          success: "#1BA15E",

          warning: "#EAB22E",

          error: "#E8172C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
