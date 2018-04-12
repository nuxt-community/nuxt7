const { resolve, relative } = require('path')
const { defaultsDeep, omit, startCase } = require('lodash')
const f7BuildConfig = require('./f7-config')

const resolvePath = (...args) => resolve(__dirname, ...args)

module.exports = function nuxt7 (_options) {
  const options = defaultsDeep({}, _options, this.options.framework7, defaults)

  // CamelCase component names
  options.build._components = normalizeComponents(options.build.components)

  // Router Mode
  if (options.mode === 'history') {
    options.view.pushStateSeparator = "__window.location.origin ? '' : '#'__"
    options.view.pushStateRoot = '__window.location.origin__'
  }

  // Force mode to SPA
  this.options.mode = 'spa'
  this.options.render.ssr = false
  this.options.build.ssr = false

  // Disable postcss for less transformations
  this.options.build.postcss = false

  // Extend webpack config
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

  // Webpack 4 cacheGroup
  if (this.options.build.optimization) {
    const { cacheGroups } = this.options.build.optimization.splitChunks

    cacheGroups.framework7 = {
      test: /node_modules[\\/](framework7|framework7-vue|dom7|template7|ssr-window|path-to-regexp)[\\/]/,
      chunks: 'all',
      priority: 10,
      name: 'framework7'
    }
  }

  // Remove custom keys for framework7 plugin
  options.plugin = omit(options, extraKeys)

  // Add templates
  addTemplates.call(this, options)

  // Icons
  if (options.f7Icons) {
    options.f7IconsSrc = relative(
      this.options.buildDir,
      resolvePath('fonts/framework7-icons.css')
    )
  }

  if (options.mdIcons) {
    options.mdIconsSrc = relative(
      this.options.buildDir,
      resolvePath('fonts/material-icons.css')
    )
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

function extendConfig (config, options) {
  // Increase performance check limits to 2M (non-gzipped)
  const MAX_SIZE = 2 * 1024 * 1024
  Object.assign(config.performance, {
    maxEntrypointSize: MAX_SIZE,
    maxAssetSize: MAX_SIZE
  })
}

function addTemplates (options) {
  // Framework7 plugin
  this.addPlugin({
    src: resolvePath('templates/framework7/f7.plugin.js'),
    fileName: 'framework7/f7.plugin.js',
    options
  })

  // Copy all templates
  for (const template of templates) {
    this.addTemplate({
      src: resolvePath('templates/' + template),
      fileName: template,
      options
    })
  }
}

function tryResolve (path) {
  try {
    return require.resolve(path)
  } catch (err) {
    return null
  }
}

function normalizeComponents (components) {
  return components.map((name) => ({
    name,
    camelName: startCase(name).replace(/ /g, ''),
    js: tryResolve(`framework7/dist/components/${name}/${name}.js`),
    less: tryResolve(`framework7/dist/components/${name}/${name}.less`)
  }))
}

const templates = [
  // Framework 7
  'framework7/f7.router.js',
  'framework7/f7.styles.less',
  'framework7/f7.components.js',
  // Nuxt
  'App.js',
  'components/nuxt.js',
  'layouts/default.vue',
  'router.js'
]

const extraKeys = [
  'build',
  'mode',
  'themeColor',
  'css',
  'f7Icons',
  'mdIcons',
  'f7IconsSrc',
  'mdIconsSrc',
  'pwa',
  'routes',
  'plugin'
]

const defaults = {
  build: Object.assign({}, f7BuildConfig),

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
