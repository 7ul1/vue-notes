import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/about"
    },
    {
        path: '/about',
        name:'About',
        component: About
    },
    {
        path: '/home',
        name:'Home',
        component: Home,
        children:[
            // {
            //     path:'/',
            //     // redirect:"news"
            //     redirect:"/news"
            // },
            {
                // path: 'news',
                path: '/news',
                name:'news',
                component: News
            },
            {
                // path: 'message',
                path: '/message',
                name:'message',
                component: Message,
                children:[
                    {
                        path:'/detail',
                        name:'detail',
                        components:Detail,
                    }
                ]
            }
        ]
    },


]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
