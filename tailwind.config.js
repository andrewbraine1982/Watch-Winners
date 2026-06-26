/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F2",
        graphite: "#171717",
        gold: "#C8A45A",
        green: "#0D3B2E",
        stoneSoft: "#EFEAE2",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
