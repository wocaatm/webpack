<template>
	<div id="watch">
		<button @click='changeIndex'>改变顺序</button>
		<button @click='deleteEle'>删除第一个元素</button>
		<button @click='deleteAdd'>删除再添加一个元素</button>
		<ul>
			<li v-for='item in list'>{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		// data () {
		// 	return {
		// 		list: [1,2,3,4]
		// 	}
		// },
		methods: {
			changeIndex () {
				let [a, b] = this.list

				this.list.splice(0,1,b)
				this.list.splice(1,1,a)
			},
			deleteEle () {
				this.list.splice(0, 1)
			},
			deleteAdd () {
				let a = this.list.shift()

				this.list.unshift(a)
			}
		},
		updated () {
			console.log('update patch')
		},
		// watch: {
		// 	list: {
		// 		handler: function (o, n) {
		// 			console.log('list change')
		// 			console.log(o.length)
		// 			console.log(o === n)
		// 			if (o.length !== n.length) {
		// 				console.log('length change')
		// 			}
		// 		},
		// 		deep: true
		// 	}
		// }
	}

	// 哪怕表象不变，比如数组的顺序没变，其实源码中当调用Array的一些变异方法之后就会触发update的钩子，watch的deep：true 之后，handler里面的 变化前后的对象是没有办法比较的，应为是引用对象，所以o === n 内部所有的比较都是无用的
</script>

<style>
	
</style>