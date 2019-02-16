const defaultsDeep = require('lodash/defaultsDeep')
const startCase = require('lodash/startCase')
const omit = require('lodash/omit')

const { resolvePath } = require('./utils')
const defaults = require('./defaults')

module.exports = function getOptions (_options) {
  const options = defaultsDeep({}, _options, this.options.framework7, defaults)

  // CamelCase component names
  options.build._components = normalizeComponents(options.build.components)

  // Router Mode
  if (options.mode === 'history') {
    options.view.pushStateSeparator = "__window.location.origin ? '' : '#'__"
    options.view.pushStateRoot = '__window.location.origin__'
  }

  // Remove custom keys for framework7 plugin
  options.plugin = omit(options, extraKeys)

  // Icons
  if (options.f7Icons) {
    options.f7IconsSrc = resolvePath('fonts/framework7-icons.css')
  }

  if (options.mdIcons) {
    options.mdIconsSrc = resolvePath('fonts/material-icons.css')
  }

  return options
}

function normalizeComponents (components) {
  return components.map((name) => ({
    name,
    camelName: startCase(name).replace(/ /g, ''),
    js: `framework7/components/${name}/${name}.js`,
    less: `~framework7/components/${name}/${name}.less`
  }))
}

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
