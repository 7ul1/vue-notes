<template>
    <div class="user">
        <h1 @click="shouName">学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
    // 引入一个混合
    import {mixin} from "../mixin"

    export default {
        name: "SSchool",
        data(){
            return{
                name:'SHANGGUIGU',
                address:'BeiJing'
                
            }
        },
        mixins:[mixin]

    }
</script>

<style scoped>
    .user{
        background: skyblue;
    }
</style>