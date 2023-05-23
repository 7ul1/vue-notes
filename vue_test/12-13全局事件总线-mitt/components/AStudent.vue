<template>
    <div class="student">
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
        <button @click="sendSchool">fasongshuju</button>
    </div>
</template>

<script>
    // import { getCurrentInstance } from 'vue';
    // const ins = getCurrentInstance();
    import EventBus from '../mi.js'
    export default {
        name: "AStudent",
        data(){
            return{
                name:'Tom',
                age:18
                
            }
        },
        methods:{
            sendSchool(){
                // // console.log(this.name);
                // ins?.proxy?.EventBus.emit('sendPrs',this.name)
                EventBus.emit('sendPrs',this.name)
            }
        }

    }
</script>

<style scoped>
    .student{
        background: skyblue;
    }
</style>
