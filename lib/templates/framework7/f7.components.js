import Framework7 from 'framework7'

import * as components from 'framework7-vue'

<%= options.build._components.filter(c => c.js).map(c =>
  `import ${c.camelName} from 'framework7/dist/components/${c.name}/${c.name}.js'`
).join('\n')%>

Framework7.use([
<%= options.build._components.filter(c => c.js).map(c => c.camelName).join(',  \n') %>
])

export default {
  install(Vue) {
    Vue.mixin({ components })
  }
}
