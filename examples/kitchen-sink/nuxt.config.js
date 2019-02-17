const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: [
    '@nuxtjs/pwa',
    '@@/lib/module'
  ],
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
    routes: {
      'tabs-routable': {
        tabs: [
          { path: '/', id: 'tab1', content: 'Tab Content 1' },
          { path: '/tab2/', id: 'tab2', content: 'Tab Content 2' },
          { path: '/tab3/', id: 'tab3', content: 'Tab Content 3' }
        ]
      }
    }
  },
  css: ['css/app.css']
}
