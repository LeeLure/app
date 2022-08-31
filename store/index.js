import Vue from 'vue'

import Vuex from 'vuex'

import user from './modules/user'
import room from './modules/room'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user,
		room
	}
})
export default store
