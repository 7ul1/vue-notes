<template>
    <div>
        <AStudent name="李四" :age="18" />
        <AStudent name="小明" :age="11" />
    </div>
</template>

<script>
    import AStudent from './components/AStudent'
    export default {
        name: "App",
        components:{AStudent},
    }
</script>

<style scoped>

</style>