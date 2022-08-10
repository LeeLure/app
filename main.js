import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import uView from "uview-ui";
import navigation from "@/components/navigation.vue"
Vue.use(uView);
Vue.component('navigation', navigation);
App.mpType = 'app'
const app = new Vue({
    ...App
})
// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif