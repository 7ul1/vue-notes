<template>
    <div class="student">
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
        <button @click="sendStudentName">获取学生名字</button>
        <button @click="unbind">获取学生名字</button>
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
        methods:{
            sendStudentName(){
                // 触发Student身上的aiteguigu事件
                this.$emit('aiteguigu',this.name)
                this.$emit('click')
            },
            unbind(){
                // eslint-disable-next-line vue/no-deprecated-events-api
                this.$off('aiteguigu')
            }
        }
    }
</script>

<style scoped>
    .student{
        background: skyblue;
    }
</style>
