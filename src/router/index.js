import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import RoomsPage from '@/pages/RoomsPage.vue'
import RoomPage from '@/pages/RoomPage.vue'
import Introduction from '@/pages/IntroductionPage.vue'
import Gallery from '@/pages/GalleryPage.vue'
import Contact from '@/pages/ContactPage.vue'

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
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
