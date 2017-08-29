<template>
	<div id="index">
		<vu-header></vu-header>
    <router-view></router-view>
	</div>
</template>

<script>
export default {

  name: 'Index',
  data(){
  	return {

  	}
  },
  components: {
    vuHeader: require('../tpl/header.vue')
  },
  created () {
    console.log(this.$store.state.header.title);
  }
};
</script>

<style lang="css" scoped>
</style>