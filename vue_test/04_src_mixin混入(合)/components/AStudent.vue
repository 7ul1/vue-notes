<template>
    <div class="user">
        <h1 @click="shouName">姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
    </div>
</template>

<script>
    import {mixin} from "../mixin"
    export default {
        name: "AStudent",
        data(){
            return{
                name:'Tom',
                age:18
                
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