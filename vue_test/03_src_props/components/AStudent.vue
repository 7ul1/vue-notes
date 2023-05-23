<template>
    <div class="user">
        <h1>{{msg}}</h1>
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age+1}}</h1>
    </div>
</template>

<script>
    export default {
        name: "AStudent",
        data(){
            return{
                msg:'我是一名学生',
                
            }
        },
        // props:['name','age']
        // 接收的同时对类型进行限制
        // props:{
        //     name:String,
        //     age:Number
        // },

        // 接收的同时对类型进行限制 + 默认值的设定 + 必要性的限制
        props:{
            name:{
                type:String,  // 判断是什么类型的
                required:true // 判定内容是否为必要的
                // 正常情况下 判定内容是否为必要的和默认值是不能同时存在的
                // required 和 default 不能同时存在
            },
            age:{
                type:Number,
                default:100 // 默认值
            }
        }
    }
</script>

<style scoped>
    .user{
        background: skyblue;
    }
</style>