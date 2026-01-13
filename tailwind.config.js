/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00a8ff",
        "primary-light": "#4dc3ff",
        "primary-dark": "#0097e6",
      },
      boxShadow: {
        glow: "0 8px 32px rgba(0,168,255,0.25)",
        inset: "0 2px 8px rgba(255,255,255,0.1) inset",
      },
    },
  },
  plugins: [],
};