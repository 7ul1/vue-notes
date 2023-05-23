<template>
    <div>
        <AStudent/>
        <SSchool/>
    </div>
</template>

<script>
    import AStudent from './components/AStudent'
    import SSchool from './components/SSchool'
    export default {
        name: "App",
        components:{AStudent,SSchool},
    }
</script>

<style scoped>

</style>