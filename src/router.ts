import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/MainView.vue'),
    },
    {
      path: '/',
      component: () => import('./views/MainView.vue'),
      name: 'main'
    },
    {
      path: '/stat',
      component: () => import('./views/StatView.vue'),
      name: 'stat'
    },
  ],
  history: createWebHistory(),
})
