
/*

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


*/

/* --------------------------------------------- */

// 引入vue-router的两个api,
// createRouter创建路由，createWebHashHistory 采用hash模式， createWebHistory采用history模式
import {createRouter,createWebHashHistory}  from 'vue-router'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            // redirect:"/about",
            // meta:{title:'主页的主页的主页'}
        },
        {
            path: '/about',
            name:'About',
            component:()=>import('../pages/About'),
            meta:{isAuth: true,title:'关于'}
        },
        {
            path: '/home',
            name:'Home',
            component: ()=>import('../pages/Home'),
            // meta:{
            //     keepAlive:true,
            //     // showFooter:true
            // },
            meta:{title:'主页'},
            children:[
                {
                    // path: 'news',
                    path: '/news',
                    name:'news',
                    component: ()=>import('../pages/News'),
                    meta: {isAuth: true,title:'新闻'},
                    /* 独享路由守卫 */
                    // beforeEnter:(to,from,next)=>{
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('你错了，不该来here')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // },
                    // meta:{
                    //     keepAlive:true,
                    //     showFooter:true
                    // }
                },
                {
                    // path: 'message',
                    path: '/message',
                    name:'message',
                    component: ()=>import('../pages/Message'),
                    meta: {isAuth: true,title: '信息'},
                    children:[
                        {
                            path:'/detail',
                            name:'detail',
                            component: ()=>import('../pages/Detail'),
                            meta: {isAuth: true,title: '详情'},
                        }
                    ]
                }
            ]
        },
    ]
})

// 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log('beforeEach',to,from,next)
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('你错了，不该来here')
//         }
//     }else{
//         next()
//     }
// })

// 全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from,next)=>{
    console.log('afterEach',to,from,next)
    document.title = to.meta.title || '小肥牛学院'

})

export default router