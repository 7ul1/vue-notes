<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
    // import { getCurrentInstance } from 'vue';
    // const ins = getCurrentInstance();
    // import EventBus from '../mi.js'
    import pubsub from 'pubsub-js'
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
            // EventBus.on('sendPrs',(p)=>{
            //     console.log('收到',p);
            // })
            this.pubId =  pubsub.subscribe('hello',function(msgName,data){
                console.log('发送了hello消息,hello消息的回调执行了',msgName,data);
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubId)
        }

    }
</script>

<style scoped>
    .school{
        background: orange;
    }
</style>
