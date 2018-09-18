import Vue from 'vue'
import './assets/css/base.css'
import Watch from './moduleA/watch'

new Vue({
  el: '#app',
  template: '<Watch/>',
  components: {
  	Watch
  }
})