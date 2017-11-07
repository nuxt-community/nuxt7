import Vue from 'vue'

// Styles
<% css.forEach(function (c) { %>import '<%= relativeToBuild(resolvePath(c.src || c)) %>'
<% }) %>

// Default layout
import _default from '<%= layouts['default'] %>'

export default {
  name: 'app',
  // Temporary workaround for https://github.com/vuejs/vue-hot-reload-api/pull/62
  // functional: true,
  render(h) {
    return h(_default, {
        class: 'framework7-root'
    })
  },
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
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
