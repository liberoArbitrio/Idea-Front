import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/pages/SignUp.vue'),
    },
    {
      path: '/winners',
      name: 'winners',
      component: () => import('@/views/pages/WinnersArchive.vue'),
    },
    {
      path: '/award/:id',
      name: 'awardDetail',
      component: () => import('@/views/pages/AwardDetail.vue'),
    },
  ],
})

export default router
