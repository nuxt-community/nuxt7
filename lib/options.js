const { resolvePath } = require('./utils')
const defaults = require('./defaults')
const defu = require('defu')

module.exports = function getOptions (_options) {
  const options = defu({ ...this.options.framework7, ..._options }, defaults)

  // History mode
  if (options.mode === 'history') {
    options.main.pushStateSeparator = ''
  }

  // Disable context menu
  if (options.disableContextMenu) {
    if (!options.app.touch) {
      options.app.touch = {}
    }
    options.app.touch.disableContextMenu = true
  }

  // CamelCase component names
  options._components = normalizeComponents(options.components)

  // Icons
  if (options.f7Icons) {
    options.f7IconsSrc = resolvePath('fonts/framework7-icons.css').replace(/\\/g, '\\\\')
  }

  if (options.mdIcons) {
    options.mdIconsSrc = resolvePath('fonts/material-icons.css').replace(/\\/g, '\\\\')
  }

  return options
}

function normalizeComponents (components) {
  return components.map((name) => ({
    name,
    js: `framework7/components/${name}/${name}.js`,
    less: `~framework7/components/${name}/${name}.less`
  }))
}
