import { createRouter, createWebHistory } from 'vue-router';
import UsuarioView from '@/views/usuario/UsuarioView.vue';
import LoginPage from '@/views/usuario/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usuario',
      component: UsuarioView,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginPage
        },
        {
          path: '/cadastrar',
          name: 'cadastrar',
          component: () => import('@/views/usuario/CadastrarView.vue')
        },
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
    }
  ]
})

export default router
