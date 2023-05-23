<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="kw"/>&nbsp;
            <button @click="searchKw">Search</button>
        </div>
    </section>
</template>

<script>
    import pubsub from 'pubsub-js'
    import axios from 'axios'
    export default {
       name:'Search',
        data(){
           return{
               kw:''
           }
        },
        methods:{
            searchKw(){
                // 请求前更新list数据
                pubsub.publish("updataListData",{isFirst:false,isLoading:true,errMsg:'',users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.kw}`).then(
                    response =>{
                        console.log('请求成功了')
                        // pubsub.publish("updataListData",false,false,'',response.data.items)
                        pubsub.publish("updataListData",{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error =>{
                        console.log('请求失败了')
                        pubsub.publish("updataListData",{isLoading:false,errMsg:error.message,users:[]})

                    }
                )
            }
        },

    }
</script>
