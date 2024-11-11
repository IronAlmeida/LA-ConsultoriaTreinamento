module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        codep: "url('/public/Site.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
