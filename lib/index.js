const { resolve } = require('path')

const defaults = {
  css: true,
  rtl: false
}

module.exports = function nuxt7(moduleOptions) {
  const options = Object.assign({}, defaults, this.options.nuxt7, moduleOptions)
  const resolvePath = (...args) => resolve(__dirname, '..', ...args)
  const resolveDep = p => require.resolve(p)

  // Force mode to SPA
  this.options.mode = 'spa'
  this.options.render.ssr = false
  this.options.build.ssr = false

  // Customize build
  this.extendBuild(config => {
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
    config.resolve.alias['framework7'] = resolveDep('@pi0/framework7/dist/js/framework7.module.js')

    // framework7-vue
    config.resolve.alias['framework7-vue'] = resolveDep('@pi0/framework7-vue/dist/framework7-vue.module.js')
  })

  // Force add F7 dependencies to common chunk
  this.addVendor('@pi0/framework7')
  this.addVendor('@pi0/framework7-vue')
  this.addVendor('dom7')
  this.addVendor('template7')


  // Framework7 css files
  if (options.css) {
    this.options.css.push(resolveDep(`@pi0/framework7/dist/css/framework7${options.rtl ? '.rtl' : ''}.css`))
  }

  // Nuxt7 specific
  this.options.css.push(resolvePath('assets/nuxt7.css'))

  // Icons
  this.options.css.push('framework7-icons/css/framework7-icons.css')
  this.options.css.push(resolvePath('assets/material-icons/material-icons.css'))

  // Framework7 plugin
  this.addPlugin({
    src: resolvePath('templates/plugin.js'),
    fileName: 'framework7.js',
    options
  })

  // Add apple specific meta for PWA mode
  if (!this.options.meta) this.options.meta = {}
  this.options.meta.mobileAppIOS = true
  // this.options.meta.appleStatusBarStyle = 'black-translucent'

  // Require PWA module
  return Promise.all([
    this.requireModule('@nuxtjs/pwa')
  ])
}
