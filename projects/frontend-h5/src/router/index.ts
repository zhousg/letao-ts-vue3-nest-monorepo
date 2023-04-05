import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Layout/index.vue'),
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('@/views/Home/index.vue') },
      { path: '/shop', component: () => import('@/views/Shop/index.vue') },
      { path: '/member', component: () => import('@/views/Member/index.vue') },
      { path: '/cart', component: () => import('@/views/Cart/index.vue') },
      { path: '/user', component: () => import('@/views/User/index.vue') },
    ],
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
