<template>
<f7-page>
    <f7-navbar title="User Page" back-link="Back" />

    <f7-block>
      <h2>User: {{ name }}</h2>
    </f7-block>
</f7-page>
</template>

<script>
export default {
  data () {
    const name = this.$f7route.params.name
    return {
      name
    }
  }
}
</script>
