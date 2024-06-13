const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    '*.html',
    './js/*.js',
    './letter/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

