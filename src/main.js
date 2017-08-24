// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store";
import router from './router'

// The third plg
window.$ = window.jQuery = require('jquery')
window.bs = require('bootstrap')

// css
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
