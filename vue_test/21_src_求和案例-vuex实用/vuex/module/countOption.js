export default {
    namespaced:true,

    actions:{
        // jia(context,value) {
        //     context.commit('JIA',value);
        // },
        // jian(context,value){
        //     context.commit('JIAN',value);
        // },
        jiaOdd(context,value){
            if (context.state.num % 2){
                context.commit('JIA',value);
            }
        },
        jiaWait(context,value){
            setTimeout(()=>{
                context.commit('JIA',value);
            },500)
        }
    },
    mutations:{
        JIA(state,value){
            state.num += value
        },
        JIAN(state,value){
            state.num -= value
        },
    },
    state:{
        num:0,
        school:'尚硅谷',
        subject:'Vue',
    },
    getters:{
        bigSum(state){
            return state.num * 10
        }
    }
}