<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <SSchool :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <AStudent @aiteguigu="getStudentName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(二种写法，使用ref) -->
        <!-- <AStudent ref="student" @click.native="show"/> -->
    </div>
</template>

<script>
    import SSchool from './components/SSchool'
    import AStudent from './components/AStudent'
    export default {
        name: "App",
        components:{AStudent,SSchool},
        data(){
            return{
                msg:'你好哇'
            }
        },
        methods:{
            getSchoolName(name){
                console.log('收到了名字',name);
            },
            getStudentName(name){
                console.log('demo调用了',name);
            },
            show(){
                alert(213213123213)
            }
        },
        mounted(){
            setTimeout(() => {
                // this.$refs.student.$on('aiteguigu',this.getStudentName)
                this.$refs.student.$once('aiteguigu',this.getStudentName)
                // console.log(this.$refs.student.name);
                // console.log(this.$refs.student);
            }, 3000);
        }
    }
</script>

<style scoped>
    .app{
        background: gray;
    }
</style>