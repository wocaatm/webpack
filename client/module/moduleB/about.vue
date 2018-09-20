<template>
    <div id="module-c-index">
        <common-header></common-header>
        <p>这是moduleC的首页。直接加载。不是懒加载</p>
    </div>
</template>

<script>
    import commonHeader from 'assets/component/header'

    export default {
        data () {
            return {
                moduleC: {
                }
            }
        },
        components: {
            commonHeader
        }
    }
</script>

<style>
    #module-c-index {
        color: yellow;
    }
</style>