const { themeColor, colors, themes, components } = require('./build-config')

module.exports = {
  app: {
    theme: 'auto'
  },

  main: {
    main: true,
    pushState: true
  },

  invertNav: true,
  disableContextMenu: true,
  disableSelect: true,

  rtl: false,

  themeColor,
  themes,
  darkTheme: true,
  colors,

  components,

  css: true,
  customCSS: true,

  f7Icons: true,

  mdIcons: true,
  mode: 'history',
  routes: {}
}
