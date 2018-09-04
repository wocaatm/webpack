import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../moduleB/index'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	baseUrl: 'moduleB',
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/about',
			component: resolve => require(['../moduleB/about.vue'], resolve)
		}
	]
})

export default router