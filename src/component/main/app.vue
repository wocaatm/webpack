<template>
    <div id="main">
        <h1>main 入口</h1>
    </div>
</template>

<script>
  import Vue from 'vue'

  //Vue.prototype.$message.success('helo world')
  console.log(Vue.$message)
  console.log('========== ')
  console.log(Vue.prototype)
  
  export default {
    name: "app",
  }
</script>

<style>
    h1 {
        color: blue
    }
</style>