import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'

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
      component: () => import('../views/EmbassamentsView.vue'),
    },
    {
      path: '/aigua/:nomEmbassament',
      name: 'detallEmbassament',
      component: () => import('../views/DetallEmbassamentView.vue'),
      props: (route) => ({ nomEmbassament: route.params.nomEmbassament })
    },
    {
      path: '/compra',
      name: 'compra',
      component: () => import('../views/CompraView.vue')
    }
  ]
})

export default router
