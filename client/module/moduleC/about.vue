<template>
    <div id="module-c-about">
    	<p>这是moduleC的about页, 懒加载进来的路由</p>
    </div>
</template>

<script>
  export default {
  	data () {
  		return {
  		}
  	},
    create () {
      let t = this
    }
  }
</script>

<style>
  #module-c-about {
  	color: #fff;
    font-weight: 800;
  }
</style>