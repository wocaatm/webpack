<template>
    <div id="module-a-index">
		  <module-nav></module-nav>
    	<p class="no-found">404页面</p>
    </div>
</template>

<script>
  import moduleNav from './nav.vue'
  import _ from 'loadsh'

  export default {
  	data () {
  		return {
  			moduleA: {
  			}
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
  .no-found {
    color: red;
  }
</style>