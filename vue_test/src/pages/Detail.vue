<template>
    <ul>
        <li>信息编号:{{id}}</li>
        <li>信息标题:{{title}}</li>
    </ul>
</template>

<script>
    import { useRoute  } from 'vue-router'
    export default {
        name: "Detail",
        setup(){
            const route = useRoute()

            const id = route.query.id;
            const title = route.query.title;
            // console.log(id)
            return{
                id,title
            }
        }
    }
</script>

<style scoped>

</style>