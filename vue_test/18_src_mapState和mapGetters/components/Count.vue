<template>
  <div>
      <h1>当前求和为:{{num}}</h1>
      <h3>当前求和放大十倍为:{{bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
    import { mapState , mapGetters} from 'vuex'
    export default {
      name:'Count',
        data(){
          return{
              // 用户选择的数字
              n:1,
          }
        },
    computed:{
        // num(){
        //   return this.$store.state.num
        // },
        // school(){
        //   return this.$store.state.school
        // },
        // subject(){
        //   return this.$store.state.subject
        // },

        // 1. 借助mapState生成计算属性 从state中读取数据 ---- 对象写法
        // ...mapState({he:'num', xuexiao:'school', xueke:'subject'}),

        // 2. 借助mapState生成计算属性 从state中读取数据 ---- 数组写法
        ...mapState(['num','school','subject']),

        // 1. mapGetters 从getters中读取数据 ---- 对象写法
        // ...mapGetters({bigSum:'bigSum'}),
        // 2. mapGetters 从getters中读取数据 ---- 数组写法
        ...mapGetters(['bigSum'])

        // bigSum() {
        //     return this.$store.getters.bigSum
        // },

    },
    methods:{
        increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        },
    },
    mounted(){
        const x = mapState({he:'num', xuexiao:'school', xueke:'subject'})
        console.log(x)
    }
}
</script>

<style scoped>
    button{
        margin: 0 2px;
    }
</style>
