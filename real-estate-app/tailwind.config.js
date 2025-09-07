/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ✅ covers all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
