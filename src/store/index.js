import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import header from "./header";
import index from "./home";

export default new Vuex.Store({
	modules: {
		header: header,
		index: index,
	}
});