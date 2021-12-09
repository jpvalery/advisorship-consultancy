const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./elements/**/*.js"],// or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        advisor: colors.emerald,
        consultant: colors.violet,
        cta: colors.blue,
      },
    },
    rotate: {
      "-75": "-75deg",
      75: "75deg",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
