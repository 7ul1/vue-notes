<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <AStudent/>
        <SSchool/>
    </div>
</template>

<script>
    import SSchool from './components/SSchool'
    import AStudent from './components/AStudent'
    export default {
        name: "App",
        components:{AStudent,SSchool},
        data(){
            return{
                msg:'你好哇'
            }
        },
    }
</script>

<style scoped>
    .app{
        background: gray;
    }
</style>