/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,vue,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        neutral: "var(--color-neutral)",
        white: "var(--color-white)",
        black: "var(--color-black)",
      },
    },
  },
  plugins: [],
}

