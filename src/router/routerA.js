import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../moduleA/index'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	baseUrl: 'moduleA',
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/about',
			component: resolve => require(['../moduleA/about.vue'], resolve)
		},
		{
			path: '/noFound',
			component: resolve => require(['../moduleA/noFound.vue'], resolve)
		}
	]
})

export default router