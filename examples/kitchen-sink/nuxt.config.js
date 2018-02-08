const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['@@/lib/module'],
  loadingIndicator: false,
  build: {
    extractCSS: true
  },
  generate: {
    dir: resolve(__dirname, 'dist')
  },
  manifest: {
    name: 'Nuxt7',
    description: 'Nuxt7 PWA Demo'
  },
  framework7: {
    themeColor: '#2196f3',
    mode: 'history',
    foo: 'bar',
    routes: {
      'tabs-routable': {
        tabs: [
          { path: '/', id: 'tab1' },
          { path: '/tab2/', id: 'tab2' },
          { path: '/tab3/', id: 'tab3' }
        ]
      }
    }
  },
  css: ['css/app.css']
}
