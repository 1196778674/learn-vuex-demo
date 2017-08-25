export default {
	state: {
		user_params: ''
	},
	mutations: {
		login(state, data){
			state.user_params = data;
			window.location.href = '/';
		}
	},
	actions: {

	},
	getters: {

	},
}