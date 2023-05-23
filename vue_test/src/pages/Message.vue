<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link to="/detail">{{m.title}}</router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
<!--                <router-link :to="`/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->
            </li>
        </ul>
        <router-view/>
    </div>

</template>

<script>
    import { useRouter } from 'vue-router'
    export default {
        name: "Message",
        data(){
            return{
                messageList:[
                    {id:'001',title:'信息001'},
                    {id:'002',title:'信息002'},
                    {id:'003',title:'信息003'},
                ]
            }
        },

        setup(){
            let router = useRouter()

            const pushShow= (m)=>{
                router.push({
                    path:'/detail',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
            const replaceShow= (m)=>{
                router.replace({
                    path:'/detail',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
            return{
                pushShow,replaceShow

            }


        }


    }
</script>

<style scoped>

</style>