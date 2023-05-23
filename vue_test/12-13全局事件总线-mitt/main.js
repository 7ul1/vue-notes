
   import {createApp} from 'vue';

   import App from './App.vue';

   // import mitt from 'mitt';
   // const EventBus = mitt()

   // declare module 'vue' {
   //    interface ComponentCustomProperties {
   //       EventBus: typeof EventBus
   //    }
   // }
   // createApp(App).mount('#root')
   const app = createApp(App)
   // app.config.globalProperties.EventBus = EventBus;
   
   app.mount('#root')
