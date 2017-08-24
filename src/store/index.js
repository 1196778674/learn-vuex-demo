import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import index from "./home";

export default new Vuex.Store({
	modules: {
		index: index,
	}
});