import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/AuthWiew.vue'),
    },
    {
      path: '/',
      component: () => import('./views/AuthWiew.vue'),
      name: 'auth',
    },
    {
      path: '/register',
      component: () => import('./views/RegistrationView.vue'),
      name: 'register',
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      name: 'main',
    },
    {
      path: '/stat',
      component: () => import('./views/StatView.vue'),
      name: 'stat',
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && to.name != 'auth') {
    return { name: 'auth' }
  }
})

