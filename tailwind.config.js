/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#222528",
        gray1: "#2C2F33",
        gray2: "#94979A",
        red1: "#DA584B",
        red2: "#D24D4D",
        green1: "#70B252",
        yellow1: "#E5B454",
      },
      textColor: {
        "custom-white": "#ffffff",
      },
      fontFamily: {
        sf: ["SF", "sans-serif"],
      },
    },
  },
  plugins: [],
};
