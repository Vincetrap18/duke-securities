/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A1F44",       // primary brand blue
          blueDark: "#001B33",   // darker shade for headers/nav
          blueLight: "#1E3A8A",  // lighter shade for backgrounds
          accent: "#4f6085ff",     // highlight/CTA
          gray: "#F5F7FA",       // neutral background
        },
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
