import { createApp } from 'vue'

import App from './App'

import store from "@/vuex/store";

import router from '@/router/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#root')
