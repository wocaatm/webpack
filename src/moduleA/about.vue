<template>
    <div id="module-a-about">
      <module-nav></module-nav>
    	<p>这是moduleA的about页, 懒加载进来的路由</p>
    </div>
</template>

<script>
  import '../assets/css/common.css'
  import commonHeader from '../component/common/header.vue'
  //import moduleNav from './nav.vue'
  //import _ from 'loadsh'

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
  #module-a-about {
    font-size: 12px;
  	color: red;
  }
</style>