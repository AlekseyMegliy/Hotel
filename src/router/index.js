import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import RoomsPage from '@/pages/RoomsPage.vue'
import RoomPage from '@/pages/RoomPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: RoomsPage
  },
  {
    path: '/room',
    name: 'room',
    component: RoomPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
