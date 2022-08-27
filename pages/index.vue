<template>
  <div>
    Hi from Vuex3 app! Changes here
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('this store (index)', this.$store.state)
      // console.log('this store (module)', this.$store.state.special)
      // this.$store.commit('UPDATE1', 5555)
    }
  }
</script>

<style lang="scss" scoped>

</style>