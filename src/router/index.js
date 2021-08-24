import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { 
            path: '/', 
            component: Home,
            props: true
        },
        { 
            path: '/cart', 
            component: () => import('@/views/Cart'),
            props: true
        }
    ],
    mode: 'history'
})

export default router