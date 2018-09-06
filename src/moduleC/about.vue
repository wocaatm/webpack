<template>
    <div id="module-c-about">
    	<p>这是moduleC的about页, 懒加载进来的路由</p>
    </div>
</template>

<script>
  import commonHeader from '../component/common/header.vue'
  import _ from 'loadsh'

  export default {
  	data () {
  		return {
  		}
  	},
    create () {
      let t = this
    },
    components: {
      //moduleNav
    }
  }
</script>

<style>
  #module-a-index {
  	color: red;
  }
</style>