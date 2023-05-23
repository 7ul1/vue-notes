<template>
    <div class="user">
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
    </div>
</template>

<script>
    export default {
        name: "S-tudent",
        data(){
            return{
                name:'小明',
                age:18
            }
        }
    }
</script>

<style scoped>
    .user{
        background: skyblue;
    }
</style>