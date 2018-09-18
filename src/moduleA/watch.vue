<template>
	<div>
		{{data.a}}
		<select name="" id="" v-model='data.a'>
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				count: 0,
				data: {}
			}
		},
		mounted () {
			let t = this

			setTimeout(function () {
				t.data = {a:1}
			}, 5000)
		},
		methods: {
			add () {
				this.data.a++
			}
		},
		watch: {
			'data.a' () {
				console.log('xxxxxx')
			}
		}
	}
</script>