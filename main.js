import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false


import uView from "uview-ui";
import navigation from "@/components/navigation.vue"

import store from '@/store/index.js'
Vue.prototype.$store = store

Vue.use(uView);
Vue.component('navigation', navigation);
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
//获取页面元素大小和位置
import Tool from './util/Tool.js'
Vue.prototype.$Tool = Tool
// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
