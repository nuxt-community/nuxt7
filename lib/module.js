
const { resolvePath } = require('./utils')
const templates = require('./templates')
const getOptions = require('./options')

module.exports = function nuxt7 (options) {
  this.nuxt.hook('build:before', () => {
    prepareBuild.call(this, options)
  })
}

function prepareBuild (_options) {
  const options = getOptions.call(this, _options)

  // Force mode to SPA
  this.options.mode = 'spa'
  this.options.render.ssr = false
  this.options.build.ssr = false

  // Extend webpack config
  this.extendBuild(config => {
    // Increase performance check limits to 2M (non-gzipped)
    const MAX_SIZE = 2 * 1024 * 1024
    Object.assign(config.performance, {
      maxEntrypointSize: MAX_SIZE,
      maxAssetSize: MAX_SIZE
    })
  })

  // Transpile framework7 (es builds are not being transpiled)
  const babel = this.options.build.babel
  babel.exclude = /node_modules(?![\\/](framework7|framework7-vue|template7|dom7)[\\/])/

  // Less plugin
  const less = this.options.build.loaders.less
  console.log(less)
  if (!less.plugins) {
    less.plugins = []
  }
  less.plugins.push(require('framework7/less/plugin'))

  // Global theme color
  if (options.themeColor) {
    if (!this.options.manifest) {
      this.options.manifest = {}
    }
    this.options.manifest.theme_color = options.themeColor
  }

  // Webpack 4 cacheGroup
  const { cacheGroups } = this.options.build.optimization.splitChunks
  cacheGroups.framework7 = {
    test: /node_modules[\\/](framework7|framework7-vue|dom7|template7|ssr-window|path-to-regexp)[\\/]/,
    chunks: 'all',
    priority: 10,
    name: 'framework7'
  }

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
}
