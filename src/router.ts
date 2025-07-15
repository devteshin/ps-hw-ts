import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue'),
    },
    {
      path: '/',
      component: () => import('./views/StartView.vue'),
      name: 'start',
    },
    {
      path: '/login',
      component: () => import('./views/AuthView.vue'),
      name: 'login',
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
    {
      path: '/timer/:id',
      component: () => import('./views/TimerView.vue'),
      name: 'timer',
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && !(to.name == 'login' || to.name == 'register')) {
    return { name: 'login' }
  }
  if (authStore.getToken && (to.name == 'login' || to.name == 'register' || to.name == 'start')) {
    return { name: 'main' }
  }

})

