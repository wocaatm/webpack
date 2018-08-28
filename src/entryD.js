import Vue from 'vue'
import Header from './component/common/header'
import Watch from './component/common/watch'

new Vue({
  el: '#app',
  data: {
  	all: {
  		list: [1,2,3,4],
  		count: ''
  	}
  },
  template: "<div><Watch :list='all.list'/><input type='text' v-model='all.count'/></div>",
  components: {
    Header,
    Watch
  },
  methods: {
  	parentUpate () {
  		console.log('s1')
  		this.all = JSON.parse(JSON.stringify(this.all))
  	}
  },
  updated () {
  	console.log('父组件更新')
  }
})