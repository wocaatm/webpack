import Vue from 'vue'
import _ from 'loadsh'
import Footer from './component/common/footer'

new Vue({
  el: '#app',
  template: '<Footer />',
  components: {
    Footer: Footer
  }
})