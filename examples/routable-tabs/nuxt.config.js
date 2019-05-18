const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['@@/lib/module'],
  build: {
    extractCSS: true
  },

  framework7: {
    routes: {
      index: {
        tabs: [
          { path: '', id: 'tab1' },
          { path: '/tab2', id: 'tab2' },
          { path: '/tab3', id: 'tab3' }
        ]
      }
    }
  }
}
