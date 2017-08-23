const state = {
	count: 0
};
const mutations = {
	adds(state, n){
		state.count += n;
	}
};
const getters = {

};
const actions = {

};


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	actions,
	mutations
});