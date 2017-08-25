export default {
	state: {
		user_params: ''
	},
	mutations: {
		login(state, data){
			state.user_params = data;
			store.clearAll;
			store.set('login_user', data.user_name);
			window.location.href = '/';
		}
	},
	actions: {

	},
	getters: {

	},
}