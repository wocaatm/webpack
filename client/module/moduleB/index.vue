<template>
    <div id="module-b-index">
        <common-header></common-header>
        <p>这是moduleB的首页。直接加载。不是懒加载</p>
    </div>
</template>

<script>
    import commonHeader from 'assets/component/header'

    export default {
        data () {
            return {
                moduleB: {
                }
            }
        },
        components: {
            commonHeader
        }
    }
</script>

<style>
    #module-b-index {
        color: blue;
    }
</style>