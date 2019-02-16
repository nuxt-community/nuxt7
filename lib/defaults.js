const f7BuildConfig = require('./build-config')

module.exports = {
  build: f7BuildConfig,

  mode: 'hash',
  css: true,
  f7Icons: true,
  mdIcons: true,

  routes: {},

  view: {
    main: true,
    pushState: true,
    pushStateRoot: null
  }
}
