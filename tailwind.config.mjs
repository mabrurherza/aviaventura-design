/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        brand: "#10054c",
      },
    },
  },
  plugins: [],
};
