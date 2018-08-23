import Vue from 'vue'
import Header from './component/common/header'

new Vue({
  el: '#app',
  template: '<div><Header/><p>123</p></div>',
  component: {
    Header
  }
})