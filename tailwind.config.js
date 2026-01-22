/** @type {import('tailwindcss').Config} */
export default {
  server: {
    host: "0.0.0.0", // Listen on all interfaces
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px", // Custom extra small breakpoint
        "2xs": "300px", // Custom smaller breakpoint for tiny screens
        xmd: "800px",
      },
      animation: {
        "loop-scroll": "loop-scroll 120s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
