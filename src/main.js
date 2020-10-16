// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js 是一个配置文件
// 支持配置跨域，请求路由，页面路由开发
import Vue from 'vue'
import App from './App'
import router from './router'

var axios =require('axios')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
