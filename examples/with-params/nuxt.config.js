const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['@@/lib/module'],
  build: {
    extractCSS: true
  },
  framework7: {
    mode: 'history'
  }
}
