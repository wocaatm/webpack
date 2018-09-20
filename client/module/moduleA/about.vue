<template>
    <div id="module-a-about">
    	<p>这是moduleA的about页, 懒加载进来的路由</p>
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
  #module-a-about {
    font-size: 12px;
  	color: red;
  }
</style>