<template>
  <div>
    Hi from Vuex3 app! Changes here
  </div>
</template>

<script>
  console.log('index store? in comp', indexStore)
  export default {
    mounted() {
      console.log('this store (index)', this.$store.state)
      // console.log('this store (module)', this.$store.state.special)
      this.$store.commit('inc')
    }
  }
</script>

<style lang="scss" scoped>

</style>