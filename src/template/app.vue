<template>
    <div>
        <div class="count" @click="count++">{{count}}</div>
        <qr-code text="hello world"></qr-code>
    </div>
</template>

<script>
  import qrCode from 'vue-qrcode-component'

  export default {
    data () {
      return {
        count: 0
      }
    },
    components: {
      'qr-code': qrCode
    }
  }
</script>

<style>
    .count {
        color: red;
    }
</style>