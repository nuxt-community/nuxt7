const f7BuildConfig = require('./build-config')

module.exports = {
  app: {
    theme: 'auto'
  },

  main: {
    main: true,
    pushState: true
  },

  build: {
    ...f7BuildConfig,
    invertNav: true,
    noLongTap: true
  },

  css: true,
  customCSS: true,
  f7Icons: true,
  mdIcons: true,

  mode: 'hash',
  routes: {}
}
