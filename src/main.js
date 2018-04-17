import App from './App'
import Vue from 'vue'
import FastClick from 'fastclick'
import  router from './router/router'
import store from './store/store.js'
import './config/rem'
// 引入store 对象
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
var app=new Vue({
  router,
  store,  // 注入到根实例中
  components:{ App },
  template:'<App/>'
}).$mount('#app');


