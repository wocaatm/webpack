<template>
    <div id="module-a-index">
        <!-- <common-header></common-header> -->
    	<p>这是moduleA的首页。直接加载。不是懒加载</p>
    </div>
</template>

<script>
  // import commonHeader from 'assets/component/header'

  export default {
  	data () {
  		return {
  			moduleA: {
  			}
  		}
  	},
  	components: {
      //commonHeader
  	}
  }
</script>

<style>
  #module-a-index {
  	color: red;
  }
</style>