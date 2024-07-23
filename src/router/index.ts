import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { layout: 'BlankLayout' },
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      meta: { layout: 'AppLayout' },
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})
