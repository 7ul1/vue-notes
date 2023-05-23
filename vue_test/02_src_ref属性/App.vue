<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="shouDOM">点我输出</button>
        <AStudent ref="sch"/>
    </div>
</template>

<script>
    import AStudent from './components/AStudent'
    export default {
        name: "App",
        components:{AStudent},
        data(){
            return{
                msg:'欢迎来到尚硅谷',
            }
        },
        methods:{
            shouDOM(){
                // alert('你好哇')
                // console.log(this);
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);
            }
        }
    }
</script>

<style scoped>

</style>