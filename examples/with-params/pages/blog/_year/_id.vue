<template>
<f7-page>
    <f7-navbar title="Blog" back-link="Back" />

    <f7-block>
      <h2>Year: {{ year }}</h2>
      <h2>Id: {{ id }}</h2>
    </f7-block>
</f7-page>
</template>

<script>
export default {
  data () {
    const { year, id } = this.$f7route.params
    return {
      year,
      id
    }
  }
}
</script>
