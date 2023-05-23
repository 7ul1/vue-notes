
   import {createApp} from 'vue';

   import App from './App.vue';

   // 引入插件
   import plugins from './plugins';
   createApp(App).use(plugins)
   createApp(App).mount('#root')

