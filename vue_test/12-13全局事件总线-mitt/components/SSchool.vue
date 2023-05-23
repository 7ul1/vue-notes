<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
    // import { getCurrentInstance } from 'vue';
    // const ins = getCurrentInstance();
    import EventBus from '../mi.js'
    
    export default {
        name: "SSchool",
        data(){
            return{
                name:'SHANGGUIGU',
                address:'BeiJing'
                
            }
        },
        mounted(){
            // console.log('school',this.x);
            EventBus.on('sendPrs',(p)=>{
                console.log('收到',p);
            })
        }

    }
</script>

<style scoped>
    .school{
        background: orange;
    }
</style>
