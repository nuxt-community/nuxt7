const defaultsDeep = require('lodash/defaultsDeep')
const startCase = require('lodash/startCase')

const { resolvePath } = require('./utils')
const defaults = require('./defaults')

module.exports = function getOptions (_options) {
  const options = defaultsDeep({}, _options, this.options.framework7, defaults)

  // CamelCase component names
  options.build._components = normalizeComponents(options.build.components)

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
