<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name: "About",
        /* 组件内路由守卫 */
        beforeRouteEnter(to,from,next){
            console.log('前调用了')
            if (to.meta.isAuth) {
                if (localStorage.getItem('school') === 'atguigu') {
                    next()
                } else {
                    alert('你错了，不该来here')
                }
            }else{
                next()
            }
        },
        beforeRouteLeave(to,from,next){
            console.log('后调用了')
            next()
        }
    }
</script>

<style scoped>

</style>