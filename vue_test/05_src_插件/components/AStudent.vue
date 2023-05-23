<template>
    <div class="user">
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
    </div>
</template>

<script>
    export default {
        name: "AStudent",
        data(){
            return{
                name:'Tom',
                age:18
                
            }
        },
    }
</script>
