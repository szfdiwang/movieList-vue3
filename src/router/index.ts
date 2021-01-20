import { createRouter, createWebHistory } from 'vue-router'
/* Layout */
import Layout from '@/Layout/Layout.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue')
      }
    ]
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Layout,
    children: [
      {
        path: '/movie/:id',
        name: 'Detail',
        component: () => import('@/views/Movie/Movie.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
