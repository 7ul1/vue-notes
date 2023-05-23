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
      <button @click="jiaWait(n)">等一等再加</button><br>
      <ul>
          <h4>下方组件总数及渲染列表:{{personList.length}}</h4>
          <li v-for="k in personList" :key="k.id">{{k.name}}</li>
      </ul>
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
        ...mapState(['num','school','subject','personList']),
        ...mapGetters(['bigSum'])
    },
    methods:{
        ...mapMutations(['JIA','JIAN']),
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
