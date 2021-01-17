import defu from 'defu'
import { resolveRuntimePath } from './utils'
import { defaults } from './defaults'
import { normalize } from 'upath'

export function getOptions (_options) {
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
    options.f7IconsSrc = normalize(require.resolve('framework7-icons/css/framework7-icons.css'))
  }

  if (options.mdIcons) {
    options.mdIconsSrc = resolveRuntimePath('fonts/material-icons.css')
  }

  return options
}

function normalizeComponents (components) {
  return components.map(name => ({
    name,
    js: `framework7/components/${name}/${name}.js`,
    less: `~framework7/components/${name}/${name}.less`
  }))
}
