import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/views/Login/index.vue') },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
