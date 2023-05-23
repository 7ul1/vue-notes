<template>
    <div>
        <SSchool/>
        <hr>
        <AStudent/>
    </div>
</template>

<script>
    import SSchool from './components/SSchool'
    import AStudent from './components/AStudent'
    export default {
        name: "App",
        components:{AStudent,SSchool},
    }
</script>

<style scoped>

</style>