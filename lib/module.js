const { resolve, relative } = require('path')
const { defaultsDeep } = require('lodash')
const f7BuildConfig = require('./f7-config')

const resolvePath = (...args) => resolve(__dirname, ...args)

module.exports = function nuxt7 (_options) {
  const options = defaultsDeep({}, _options, this.options.framework7, defaults)

  // Router Mode
  if (options.mode === 'history') {
    options.view.pushStateSeparator = '__window.location.origin ? \'\' : \'#\'__'
    options.view.pushStateRoot = '__window.location.origin__'
  }

  // Force mode to SPA
  this.options.mode = 'spa'
  this.options.render.ssr = false
  this.options.build.ssr = false

  // Customize build
  this.extendBuild(config => extendConfig(config, options))

  // Global theme color
  if (options.themeColor) {
    options.build.ios.themeColor = options.themeColor
    options.build.md.themeColor = options.themeColor

    if (!this.options.manifest) {
      this.options.manifest = {}
    }
    this.options.manifest.theme_color = options.themeColor
  }

  // Move F7 dependencies to common chunk
  this.addVendor(`framework7-vue`)
  this.addVendor('dom7')
  this.addVendor('template7')

  // Add templates
  addTemplates.call(this, options)

  // Icons
  if (options.f7Icons) {
    options.f7IconsSrc = relative(this.options.buildDir, resolvePath('assets/icons/framework7-icons.css'))
  }

  if (options.mdIcons) {
    options.mdIconsSrc = relative(this.options.buildDir, resolvePath('assets/icons/material-icons.css'))
  }

  // Enable nativeUI for a better Native experience
  if (!this.options.meta) {
    this.options.meta = {}
  }
  if (this.options.meta.nativeUI === undefined) {
    this.options.meta.nativeUI = true
  }

  // Require PWA module
  if (options.pwa !== false) {
    return this.requireModule('@nuxtjs/pwa')
  }

  return Promise.resolve()
}

// ----------------------------------------------------------
// Add templates
// ----------------------------------------------------------
function addTemplates (options) {
  // --- Framework7 templates ---

  // Framework7 plugin
  this.addPlugin({
    src: resolvePath('templates/f7-plugin.js'),
    fileName: 'f7-plugin.js',
    options
  })

  // Framework7 routes
  this.addTemplate({
    src: resolvePath('templates/f7-router.js'),
    fileName: 'f7-router.js',
    options
  })

  // Framework7 styles
  if (options.css) {
    this.addTemplate({
      src: resolvePath('templates/framework7.less'),
      fileName: 'framework7.less',
      options
    })
  }

  // Framework 7 components
  this.addTemplate({
    src: resolvePath('templates/f7-components.js'),
    fileName: 'f7-components.js',
    options
  })

  // --- Nuxt internals ---

  // App.js
  this.addTemplate({
    src: resolvePath('templates/App.js'),
    fileName: 'App.js',
    options
  })

  // ... Support for nuxt <= 1.0.0-rc11
  this.addTemplate({
    src: resolvePath('templates/App.vue'),
    fileName: 'App.vue',
    options
  })

  // Nuxt component
  this.addTemplate({
    src: resolvePath('templates/components/nuxt.js'),
    fileName: 'components/nuxt.js',
    options
  })

  // ... Support for nuxt <= 1.0.0-rc11
  this.addTemplate({
    src: resolvePath('templates/components/nuxt.vue'),
    fileName: 'components/nuxt.vue',
    options
  })

  // Default layout
  this.addTemplate({
    src: resolvePath('templates/layouts/default.vue'),
    fileName: 'layouts/default.vue',
    options
  })

  // Vue router
  this.addTemplate({
    src: resolvePath('templates/router.js'),
    fileName: 'router.js',
    options
  })
}

// ----------------------------------------------------------
// Extend webpack config
// ----------------------------------------------------------
function extendConfig (config, options) {
  // Don't exclude babel for F7 stuff
  const babelLoader = config.module.rules.find(r => r.loader === 'babel-loader')
  babelLoader.exclude = /node_modules\/(?!(framework7|framework7-vue|template7|dom7)\/).*/

  // Increase performance check limits to 2M (non-gzipped)
  const MAX_SIZE = 2 * 1024 * 1024
  Object.assign(config.performance, {
    maxEntrypointSize: MAX_SIZE,
    maxAssetSize: MAX_SIZE
  })

  // Disable warning for babel on framework7 dist files
  babelLoader.options.compact = false
}

// ----------------------------------------------------------
// Default options
// ----------------------------------------------------------
const defaults = {
  css: true,
  rtl: false,

  f7Icons: true,
  mdIcons: true,

  routes: {},

  mode: 'hash',

  build: Object.assign({}, f7BuildConfig),

  view: {
    main: true,
    pushState: true,
    pushStateSeparator: '#',
    pushStateRoot: null
  }
}
