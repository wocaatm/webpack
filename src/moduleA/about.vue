<template>
    <div id="module-a-about">
      <module-nav></module-nav>
    	<p>这是moduleA的about页, 懒加载进来的路由</p>
    </div>
</template>

<script>
  import moduleNav from './nav.vue'
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
      moduleNav
    }
  }
</script>

<style>
  #module-a-index {
  	color: red;
  }
</style>