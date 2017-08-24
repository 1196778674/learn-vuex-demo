const state = {
	count: 0,
	list: [{name: '', age: '', checked: false}]
};
const mutations = {
	adds(state, n){
		state.count += n;
	},
	addList(state){
		state.list.push({name: '', age: '', checked: false});
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