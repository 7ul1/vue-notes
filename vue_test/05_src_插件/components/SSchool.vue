<template>
    <div class="user">
        <h1 >学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
    export default {
        name: "SSchool",
        data(){
            return{
                name:'SHANGGUIGU',
                address:'BeiJing'
                
            }
        },
    }
</script>
