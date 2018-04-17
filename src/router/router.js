import  login from '../page/login/login'
import  home from '../page/home/home'
import VueRouter from "vue-router";
import Vue from "vue";
//const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component: home
  },
  {
    path:"/login",
    component: login
  }
]

var router =  new VueRouter({
  routes
})
export default router;
