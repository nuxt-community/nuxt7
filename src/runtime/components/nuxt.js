import Vue from 'vue'
import { f7View } from 'framework7-vue'

export default {
  name: 'nuxt',
  functional: true,
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt)
  },
  render(h, { parent: { $root }}) {
    return h(f7View, {
      props: $root.$options.framework7.main
    })
  }
}
