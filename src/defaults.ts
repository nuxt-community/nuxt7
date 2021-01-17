import { config } from './build-config'

const { themeColor, colors, themes, components } = config

export const defaults = {
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
  lightTheme: true,
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
