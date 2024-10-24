/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "Arial", "Helvetica", "sans-serif"],
        sans: ["Inter", "Helvetica", "sans-serif"]
      },
      colors: {
        brand: "#10054c",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
        padding: {
          DEFAULT: "1.25rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
