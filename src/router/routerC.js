import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../moduleC/index'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	baseUrl: 'moduleC',
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/about',
			component: resolve => require(['../moduleC/about.vue'], resolve)
		}
	]
})

export default router