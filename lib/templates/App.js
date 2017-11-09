import Vue from 'vue'

// Framework7 Styles
<% if (options.css) { %>import './framework7.less'<% } %>
<% if (options.f7IconsSrc) { %>import '<%= options.f7IconsSrc %>'<% } %>
<% if (options.mdIconsSrc) { %>import '<%= options.mdIconsSrc %>'<% } %>

// Styles
<% css.forEach(function (c) { %>import '<%= relativeToBuild(resolvePath(c.src || c)) %>'
<% }) %>

// Default layout
import _default from '<%= layouts['default'] %>'

export default {
  name: 'app',
  functional: true,
  render(h) {
    return h(_default, {
        class: 'framework7-root'
    })
  },
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt || this.$options._nuxt /* _nuxt for <= rc11 */)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // Add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
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
