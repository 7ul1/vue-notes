
   // import {createApp} from 'vue';
   //
   // import App from './App.vue';
   //
   // createApp(App).mount('#root')

   import {createApp} from 'vue';

   import App from './App.vue';

   const app = createApp(App)
   app.mount('#root')
   // app.prototype.$bus = this


   // import Vue from 'vue'
   //
   // import App from './App'
   //
   // Vue.config.productionTip = false
   //
   // new Vue({
   //    el:'#app',
   //    render:h => h(App),
   //    beforeCreate() {
   //       Vue.prototype.$bus = this
   //    }
   // })