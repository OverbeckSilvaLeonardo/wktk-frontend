import { createRouter, createWebHistory } from 'vue-router';
import BaseView from '@/views/BaseView.vue';
import LoginPage from '@/views/usuario/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: BaseView,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginPage
        },
        {
          path: '/cadastrar',
          name: 'cadastrar',
          component: () => import('@/views/usuario/CadastrarView.vue'),
        },
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home/HomeView.vue'),
          children: [
            {
              path: '/treinos',
              name: 'treinos',
              component: () => import('@/views/home/ListaTreinosView.vue'),
            },
            {
              path: 'treinos/:id',
              name: 'treino',
              props: true,
              component: () => import('@/views/home/VisualizarTreinoView.vue'),
            },
            {
              path: 'treinos/novo-treino',
              name: 'novo-treino',
              props: true,
              component: () => import('@/views/home/CriarTreinoView.vue'),
            }
          ]
        }
      ]
    },

  ]
});

export default router;
