import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import header from "./header";
import index from "./home";
import login from "./login";

export default new Vuex.Store({
	modules: {
		login: login,
		header: header,
		index: index,
	}
});