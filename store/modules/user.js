export default {
	namespaced: true,

	state: {
		uid: ''
	},

	mutations: {
		keepUid(state, uid) {
			state.uid = uid
			// console.log(state.uid);
		}
	}
}
