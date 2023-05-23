<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
<!--                <router-link :to="{-->
<!--                    path:'/detail',-->
<!--                    query:{-->
<!--                        id: m.id,-->
<!--                        title: m.title-->
<!--                    }-->
<!--                 }">-->
<!--                 {{m.title}}-->
<!--                </router-link>-->
<!--                <router-link :to="`/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->
            </li>
        </ul>
<!--        <router-view></router-view>-->

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
            const router = useRouter()

            router.push({ path: '/detail', query: { id: '001' , title: '信息001'}})
        }
    }
</script>

<style scoped>

</style>