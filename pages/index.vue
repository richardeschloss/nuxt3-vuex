<template>
  <div>
    Hi from Vuex3 app! Changes here
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('this store is ==>', this.$store.state)
      this.$store.commit('SET_SOMEVAL', Math.random())
    }
  }
</script>

<style lang="scss" scoped>

</style>