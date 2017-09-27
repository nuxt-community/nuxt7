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
    routes: {
      'tabs-routable': {
        tabs: [
          { path: "/", id: "tab1" },
          { path: "/tab2/", id: "tab2" },
          { path: "/tab3/", id: "tab3" },
        ]
      }
    }
  }
}
