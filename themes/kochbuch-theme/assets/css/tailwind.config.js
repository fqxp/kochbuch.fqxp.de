const themeDir = __dirname + '/../../';

module.exports = {
  content: [
    `${themeDir}/layouts/**/*.html`,
    `${themeDir}/content/**/*.md`
  ],
  theme: {
    fontFamily: {
      'serif': 'Vollkorn',
      'sans': '"Open Sans"'
    },
    extend: {}
  },
  variants: {},
  plugins: []
}

