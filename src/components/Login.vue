<template>
	<div id="login">
		<div class="form-horizontal login">
			<div class="form-group">
				<legend>用户登录</legend>
			</div>
			<div class="form-group">
				<input type="text" class="form-control" value="" v-model="login_params.user_name" placeholder="用户名">
			</div>
			<div class="form-group">
				<input type="password" class="form-control" v-model="login_params.password" value="" placeholder="密码">
			</div>
			<div class="form-group">
				<div>
					<button type="submit" class="btn btn-primary" @click="login">login</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
    	login_params : {
    		user_name: '',
    		password: '',
    	}
    };
  },
  methods: {
  	login(){
  		this.$store.commit('login', this.login_params);
  	}
  }
};
</script>

<style lang="css" scoped>
.login{
	width: 400px;
	max-height: 400px;
	border: 1px solid #ccc;
	margin: 0 auto;
	margin-top: 60px;
	padding: 15px 30px;
}
.login legend{
	margin-bottom: 0px;
}
</style>