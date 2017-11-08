import Vue from 'vue'

export default {
  name: 'nuxt',
  functional: true,
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt)
  },
  render (h) {
    return h('f7-view', {
      props: <%= serialize(options.view).replace(/"__([^_]+)__"/g,"$1") %>
    })
  }
}
