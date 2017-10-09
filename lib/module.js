const { resolve } = require('path')
const { defaultsDeep, cloneDeep } = require('lodash')

const defaults = {
  css: true,
  rtl: false,

  f7Icons: true,
  mdIcons: true,

  routes: {},

  mode: 'hash',

  view: {
    main: true,
    pushState: true,
    pushStateSeparator: '!#',
    pushStateRoot: null
  }
}

const resolvePath = (...args) => resolve(__dirname, ...args)
const resolveDep = p => require.resolve(p)

const PREFIX = '@pi0/'

module.exports = function nuxt7 (moduleOptions) {
  const options = defaultsDeep({}, moduleOptions, this.options.framework7, defaults)
  const cloneOptions = () => cloneDeep(options)

  // mode
  if (options.mode === 'history') {
    options.view.pushStateSeparator = '__window.location.origin ? \'\' : \'#\'__'
    options.pushState = '__window.location.origin__'
  }
  delete options.mode

  // Force mode to SPA
  this.options.mode = 'spa'
  this.options.render.ssr = false
  this.options.build.ssr = false

  // Customize build
  this.extendBuild(config => extendConfig(config, options))

  // Force add F7 dependencies to common chunk
  this.addVendor(`${PREFIX}framework7`)
  this.addVendor(`${PREFIX}framework7-vue`)
  this.addVendor('dom7')
  this.addVendor('template7')

  // Framework7 css files
  if (options.css) {
    this.options.css.push(resolveDep(`${PREFIX}framework7/dist/css/framework7${options.rtl ? '.rtl' : ''}.css`))
  }
  delete options.css

  // Icons
  if (options.f7Icons) {
    this.options.css.push('framework7-icons/css/framework7-icons.css')
  }
  delete options.f7Icons

  if (options.mdIcons) {
    this.options.css.push(resolvePath('assets/material-icons/material-icons.css'))
  }
  delete options.mdIcons

  // App.vue
  this.addTemplate({
    src: resolvePath('templates/App.vue'),
    fileName: 'App.vue',
    options
  })

  // Nuxt component
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
    src: resolvePath('templates/f7-router.js'),
    fileName: 'router.js',
    options
  })

  // Framework7 routes
  this.addTemplate({
    src: resolvePath('templates/routes.js'),
    fileName: 'f7-routes.js',
    options: cloneOptions()
  })
  delete options.routes

  // Framework7 plugin
  this.addPlugin({
    src: resolvePath('templates/f7.js'),
    fileName: 'f7.js',
    options
  })

  // Enable IOS specific meta for web app
  if (!this.options.meta) this.options.meta = {}
  this.options.meta.mobileAppIOS = true

  // Prevent zooming page for a better Native experience
  this.options.meta.viewport = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui'

  // Require PWA module
  return Promise.all([
    this.requireModule('@nuxtjs/pwa')
  ])
}

function extendConfig (config, options) {
  // Increase performance check limits to 2M (non-gzipped)
  const MAX_SIZE = 2 * 1024 * 1024
  Object.assign(config.performance, {
    maxEntrypointSize: MAX_SIZE,
    maxAssetSize: MAX_SIZE
  })

  // Don't exclude babel for F7 stuff
  const babelLoader = config.module.rules.find(r => r.loader === 'babel-loader')
  babelLoader.exclude = /node_modules\/(?!(@pi0\/framework7|@pi0\/framework7-vue|template7|dom7)\/).*/

  // Disable warning for babel on framework7 dist files
  babelLoader.options.compact = false

  // framework7
  config.resolve.alias['framework7'] = resolveDep(`${PREFIX}framework7/dist/js/framework7.esm.js`)

  // framework7-vue
  config.resolve.alias['framework7-vue'] = resolveDep(`${PREFIX}framework7-vue/dist/framework7-vue.esm.js`)
}
