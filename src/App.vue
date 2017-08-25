<template>
  <div id="app">
  	<vu-header></vu-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {
  	vuHeader: require('./tpl/header.vue')
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
