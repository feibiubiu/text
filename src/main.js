// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/changeColor'
import * as filters from './filter' // global filters
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
// 我来写一个过滤器  注册一个文本格式化 filter
console.log("wwwww",filters)
Object.keys(filters).forEach(key => {
  
  Vue.filter(key, filters[key])
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
