<template>
    <ul>
        <li>信息编号:{{userId}}</li>
<!--        <li>信息标题:{{title}}</li>-->
    </ul>
</template>

<script>
    import { useRoute } from "vue-router";

    export default {
        name: "Detail",
        computed:{
            id(){
                return this.$route.query.id
            },
            title(){
                return this.$route.query.title
            }
        },
        setup(){
            const route = useRoute()
            let userId = route.query.id
        }
    }
</script>

<style scoped>

</style>