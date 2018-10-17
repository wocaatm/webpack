import Vue from 'vue'
import VueRouter from 'vue-router'
import 'assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import Index from './index.vue'
import About from './about.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/moduleC',
    routes: [
        {
            path: '/index',
            alias: '/',
            component: Index
        },
        {
            path: '/about',
            component: About
            //component: resolve => require(['./about.vue'], resolve)
        }
    ]
})

new Vue({
    el: '#app',
    router
})