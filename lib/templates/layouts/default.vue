<script>
import { f7View, f7Statusbar } from 'framework7-vue'

export default {
  name: 'f7-layout',
  components: {
    f7View,
    f7Statusbar
  },
  render (h) {
    return h('div', [
      h('f7-statusbar'),
      h('nuxt')
    ])
  },
}
</script>