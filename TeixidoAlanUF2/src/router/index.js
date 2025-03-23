import { createRouter, createWebHistory } from 'vue-router'
import HomePage  from '../views/HomeView.vue'
import EmbassamentsPage from '../views/EmbassamentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/aigua',
      name: 'embassaments',
      component: EmbassamentsPage,
    }    
  ],
})

export default router
