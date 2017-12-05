const { join } = require('path')
module.exports = {
  srcDir: __dirname,
  build: {
    // remove postcss-cssnext due to https://github.com/MoOx/reduce-css-calc/issues/34
    postcss: [
    ],
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
    description: 'Nuxt7 PWA Demo'
  },
  framework7: {
    themeColor: '#2196f3',
    mode: 'history',
    routes: {
      'tabs-routable': {
        tabs: [
          { path: "/", id: "tab1" },
          { path: "/tab2/", id: "tab2" },
          { path: "/tab3/", id: "tab3" },
        ]
      }
    }
  },
  css: [
    'css/app.css'
  ]
}
