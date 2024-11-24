const {nextui} = require('@nextui-org/theme');
module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    extend: {
      scrolBehavior: ["smooth"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
};
