<script>
import Vue from 'vue'
import { f7Statusbar, f7View } from 'framework7-vue'

// Styles
<% css.forEach(function (c) { %>import '<%= relativeToBuild(resolvePath(c.src || c)) %>'
<% }) %>

export default {
  name: 'Nuxt7',
  render (h) {
    // Status bar
    const statusbarEl = h(f7Statusbar)
    
    // Main view
    const viewEl = h(f7View, {
      props: <%= serialize(options.view).replace(/"__([^_]+)__"/g,"$1") %>
    })

    // Create root element
    const rootEl = h('div', {
      class: "framework7-root"
    }, [statusbarEl, viewEl])

    return rootEl
  },
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
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
</script>