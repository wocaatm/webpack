import Vue from 'vue'
import _ from 'loadsh'
import Footer from './component/common/footer'
import './assets/css/base.css'
import 'handsontable-pro/dist/handsontable.css'

new Vue({
  el: '#app',
  template: '<Footer/>',
  components: {
    Footer: Footer
  }
})