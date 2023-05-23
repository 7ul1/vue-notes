export default {
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'小明'}
        ]
    },
    getters:{}
}

