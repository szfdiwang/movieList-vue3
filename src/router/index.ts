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
  },
  {
    path: '/type',
    component: Layout,
    children: [
      {
        path: '/type',
        name: 'Type',
        component: () => import('@/views/Type/Type.vue')
      }
    ]
  },
  {
    path: '/rank',
    component: Layout,
    children: [
      {
        path: '/rank',
        name: 'Rank',
        component: () => import('@/views/Rank/Rank.vue')
      }
    ]
  },
  {
    path: '/search',
    component: Layout,
    children: [
      {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search/Search.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
