<template>
    <div class="framework7-root">
        <f7-statusbar/>
        <f7-view :main="true" :pushState="true" />
    </div>
</template>

<script>
import { f7Statusbar, f7View } from 'framework7-vue'

export default {
    components: {
        f7Statusbar,
        f7View
    }
}
</script>