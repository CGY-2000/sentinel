import { createRouter, createWebHistory } from 'vue-router'
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/login.vue')
        },
        {
            path: '/admin',
            component: () => import('@/pages/admin.vue')
        },
        {
            path: '/test',
            component: () => import('@/pages/test.vue')
        }
    ]
})