
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false//阻止启动生产消息，常用作指令。
Vue.prototype.$http = axios;//在原型上定义它们使其在每个 Vue 的实例中可用
Vue.prototype.$echarts = echarts;
axios.defaults.baseURL = "http://127.0.0.1:3333"

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

