import Vue from 'vue'
import VueRouter from 'vue-router'
import 'assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import Index from './index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/moduleA',
    routes: [
      {
        path: '/index',
        alias: '/',
        component: Index
      },
      {
        path: '/about',
        component: resolve => require(['./about.vue'], resolve)
      }
    ]
})

new Vue({
  el: '#app',
  router
})