// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.prototype.$http = axios

// 引入mockjs
require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: (createElement) => createElement(App)
})

Vue.filter('getYMD', function(input) {
	return input.split(' ')[0];
})