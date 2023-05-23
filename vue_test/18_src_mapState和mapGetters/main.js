import { createApp } from 'vue'

import App from './App'

import store from "@/vuex/store";

createApp(App).use(store).mount('#root')

