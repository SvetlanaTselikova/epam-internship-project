<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
  if (this.$store.getters.isAuthenticated) {
    this.$store.dispatch('userRequest')
    this.$store.dispatch('getRecords')
    }
  }
}
</script>

<style lang="scss">
@import './assets/_index.scss';
#app {
  height:100%;
}
</style>
