import Vue from 'vue'

import * as components from 'framework7-vue'

for (const componentName in components) {
  if (componentName === 'default') {
    continue
  }
  Vue.component(componentName, components[componentName])
}

