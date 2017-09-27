const { join } = require('path')
module.exports = {
  srcDir: __dirname,
  build: {
    extractCSS: true
  },
  modules: [
    '@@'
  ],
  generate: {
    dir: join(__dirname, 'dist')
  },
  manifest: {
    name: 'Nuxt7',
    description: 'Nuxt7 PWA Demo',
    theme_color: '#2196f3'
  },
  framework7: {
    tabs: [
      'tabs-routable'
    ]
  }
}
