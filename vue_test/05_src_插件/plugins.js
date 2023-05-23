// import { onUpdated } from "vue"

export default {
   install(Vue){
      // console.log('@@@@@@@install',Vue);
      Vue.filter('mySlice',function(value){
         return value.slice(0,4)
      }),

      Vue.directive('fbind',{
         bind(element,binding){
            element.value = binding.value
         },
         inserted(element){
            element.focus()
         },
   
         Updated(element,binding){
            element.value = binding.value
         }
      })
      
      
   }
}


