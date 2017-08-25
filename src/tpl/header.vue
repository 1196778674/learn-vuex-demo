<template>
	<div>
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">{{title}}</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav">
						<li v-for="item in nav_list">
							<router-link :to="item.url" replace>{{item.name}}</router-link>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<!-- <li><a href="#">Link</a></li> -->
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">{{user_name}} <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li v-for="item in drop_list"><a href="#">{{item.name}}</a></li>
							</ul>
						</li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div>
		</nav>
	</div>
</template>

<script>
export default {

  name: 'header',

  data () {
    return {
    	title: this.$store.state.header.title,
  		nav_list: this.$store.state.header.nav_list,
  		user_name: this.$store.state.header.user_name,
  		drop_list: this.$store.state.header.drop_list
    };
  }
};
</script>

<style lang="css" scoped>
</style>