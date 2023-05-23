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
      <button @click="JIA(n)">+</button>
      <button @click="JIAN(n)">-</button>
      <button @click="jiaOdd(n)">当前求和为奇数再加</button>
      <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
    import { mapState , mapGetters , mapActions , mapMutations} from 'vuex'
    export default {
      name:'Count',
        data(){
          return{
              // 用户选择的数字
              n:1,
          }
        },
    computed:{
        // 1. 借助mapState生成计算属性 从state中读取数据 ---- 对象写法
        // ...mapState({he:'num', xuexiao:'school', xueke:'subject'}),
        // 2. 借助mapState生成计算属性 从state中读取数据 ---- 数组写法
        ...mapState(['num','school','subject']),

        // 1. mapGetters 从getters中读取数据 ---- 对象写法
        // ...mapGetters({bigSum:'bigSum'}),
        // 2. mapGetters 从getters中读取数据 ---- 数组写法
        ...mapGetters(['bigSum'])
    },
    methods:{
        // increment(){
        //     this.$store.commit('JIA',this.n)
        // },
        // decrement(){
        //     this.$store.commit('JIAN',this.n)
        // },

        // 1. 借助mapMutations生成对应的方法 方法中会调用commit去联系Mutations --- 对象写法
        // ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        // 2. 借助mapMutations生成对应的方法 方法中会调用commit去联系Mutations --- 数组写法
        ...mapMutations(['JIA','JIAN']),

        /* --------------------------------------------------------- */

        // incrementOdd(){
        //     this.$store.dispatch('jiaOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiaWait',this.n)
        // },

        // 1. 借助mapActions生成对应的方法 方法中会调用dispatch去联系Actions --- 对象写法
        // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

        // 2. 借助mapActions生成对应的方法 方法中会调用dispatch去联系Actions --- 数组写法
        ...mapActions(['jiaOdd','jiaWait'])

    },
    // mounted(){
    //     const x = mapState({he:'num', xuexiao:'school', xueke:'subject'})
    //     console.log(x)
    // }
}
</script>

<style scoped>
    button{
        margin: 0 2px;
    }
</style>
