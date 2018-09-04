<template>
    <div id="module-b-about">
      <module-nav></module-nav>
    	<p>这是moduleB的about页, 懒加载进来的路由</p>
    </div>
</template>

<script>
  import moduleNav from './nav.vue'

  export default {
  	data () {
  		return {
  		}
  	},
    components: {
      moduleNav
    }
  }
</script>

<style>
</style>