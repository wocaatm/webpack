<template>
    <div id="module-a-index">
      <common-header></common-header>
		  <module-nav></module-nav>
    	<p>这是moduleB的首页。直接加载。不是懒加载</p>
    </div>
</template>

<script>
  import moduleNav from './nav.vue'
  import commonHeader from '../component/common/header.vue'

  export default {
  	data () {
  		return {
  			moduleA: {
  			}
  		}
  	},
  	components: {
  		moduleNav,
      commonHeader
  	}
  }
</script>

<style>
</style>