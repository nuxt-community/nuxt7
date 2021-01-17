
import type { Module } from '@nuxt/types'
import { resolveRuntimePath } from './utils'
import { templates } from'./runtime/_templates'
import { getOptions } from './options'

export default <Module> function nuxt7 (options) {
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
  this.extendBuild((config) => {
    // Increase performance check limits to 2M (non-gzipped)
    const MAX_SIZE = 2 * 1024 * 1024
    Object.assign(config.performance, {
      maxEntrypointSize: MAX_SIZE,
      maxAssetSize: MAX_SIZE
    })
  })

  // Transpile framework7
  this.options.build.transpile.push(
    /framework7[\\/](?!less)(?!components\/swiper\/swiper-src\/less)/,
    'framework7-vue',
    'template7',
    'dom7'
  )

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
    src: resolveRuntimePath('framework7/plugin.js'),
    fileName: 'framework7/plugin.js',
    options
  })

  // Copy all templates
  for (const template of templates) {
    this.addTemplate({
      src: resolveRuntimePath(template),
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
}
