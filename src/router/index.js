import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeCards from '@/components/HomeCards.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'HomeCards',
    component: HomeCards
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
