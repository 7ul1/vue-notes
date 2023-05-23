<template>
    <div>
        <h1>人员列表</h1>
        <h2>Count里的num值:{{num}}</h2>
        <input type="text" placeholder="输入" v-model="name">
        <button @click="add">点击添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    import { mapState } from 'vuex'
    export default {
        name: "Person",
        data(){
            return{
                name:''
            }
        },
        computed:{
            ...mapState(['personList','num'])
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',personObj)
                this.name = ''
            }

        }
    }
</script>

<style scoped>

</style>