import Vue from 'vue'
import { f7App } from 'framework7-vue'

// Framework7 Styles
<% if (options.css) { %>import './framework7/styles.less'<% } %>
<% if (options.customCSS) { %>import './framework7/custom.less'<% } %>
<% if (options.f7IconsSrc) { %>import '<%= options.f7IconsSrc %>'<% } %>
<% if (options.mdIconsSrc) { %>import '<%= options.mdIconsSrc %>'<% } %>

// User provided styles
<%= css.map(c=> `import '${relativeToBuild(resolvePath(c.src || c))}'`).join(';') %>

// Default layout
import defaultLayout from '<%= layouts['default'] %>'

export default {
  functional: true,
  render(h) {
    const layout = h(defaultLayout, {
      class: 'framework7-root'
    })

    const params = this.$options.framework7.app
    const routes = this.$options.framework7.routes

    return h(f7App, {
      props: {
        params,
        routes
      }
    }, [layout])
  },
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt || this.$options._nuxt /* _nuxt for <= rc11 */)
  },
  created () {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this
    // Add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },
  methods: {
    setLayout (layout) {
      // STUB
    },
    loadLayout (layout) {
      // STUB
    }
  },
  head: <%= JSON.stringify(head) %>,
}
