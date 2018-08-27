<template>
    <div id="header">
        这是头部
        <div id="table" ref="table"></div>
    </div>
</template>

<script>

  export default {
    name: "header",
    mounted () {
      // let container = this.$refs.table
      // import 会产生一个chunk
      // import(/* webpackChunkName: "handsontable"*/ 'handsontable').then(m => {
      //   let Handsontable = m.default
      //   new Handsontable(container, {
      //     data: Handsontable.helper.createSpreadsheetData(100, 100),
      //     height: 400,
      //     colHeaders: true,
      //     columnSorting : true
      //   })
      // })
      this.loadScript('//static.xinrenxinshi.com/storm/handsontable-1.13.0.full.min.js', this.createTable)
    },
    methods: {
      loadScript (url, callback) {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        if(script.readyState){//IE
          script.onreadystatechange = function(){
            if(script.readyState == 'loaded' || script.readyState == 'complete'){
              script.onreadystatechange = null;
              callback()
            }
          }
        }else{//Other
          script.onload = function(){
            callback();
          }
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
      },
      createTable () {
        let container = this.$refs.table
        new Handsontable(container, {
          data: Handsontable.helper.createSpreadsheetData(100, 100),
          height: 400,
          colHeaders: true,
          columnSorting : true
        })
      }
    }
  }
</script>

<style>
    @import "~handsontable-pro/dist/handsontable.css";
    
    #header {
        color: red;
    }
</style>