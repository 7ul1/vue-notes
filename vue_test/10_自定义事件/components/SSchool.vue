<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
        <button @click="sendSchoolName()">获取名字</button>
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
        props:['getSchoolName'],
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style scoped>
    .school{
        background: orange;
    }
</style>
