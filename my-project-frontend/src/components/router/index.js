import {createRouter, createWebHistory} from "vue-router";
import {unauthorized} from "@/components/net/index.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/components/views/WelcomeView.vue'),
            children: [
                {
                    path: '',
                    name: 'welcome-login',
                    component: () => import('@/components/views/welcome/LoginPage.vue')
                }, {
                    path: '/reset',
                    name: 'welcome-reset',
                    component: () => import('@/components/views/welcome/ResetPage.vue')
                }, {
                    path: '/register',
                    name: 'welcome-register',
                    component: () => import('@/components/views/welcome/RegisterPage.vue')
                }
            ]
        }, {
            path: '/index',
            name: 'index',
            component: () => import('@/components/views/IndexView.vue')
        }
    ]
})

// 路由守卫，防止未登录可以访问其他页面
router.beforeEach((to, from, next) => {
    const isUnauthorized = unauthorized()
    if (to.name.startsWith('welcome-') && !isUnauthorized) {
        next('/index')
    } else if (to.fullPath.startsWith('/index') && isUnauthorized) {
        next('/')
    } else {
        next()
    }
})

export default router;
