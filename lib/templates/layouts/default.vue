<script>
import { f7Statusbar } from 'framework7-vue'

export default {
  render (h) {
    return h('div',[
      h(f7Statusbar),
      h('nuxt')
    ])
  },
}
</script>
