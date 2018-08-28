import Vue from 'vue'
import Header from './component/common/header'
import Watch from './component/common/watch'

new Vue({
  el: '#app',
  template: '<div><Watch/></div>',
  components: {
    Header,
    Watch
  }
})