import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/api';

export const useUsuariosStore = defineStore('usuario', () => {
  const usuario = ref({} as any);

  async function login(email: string, senha: string) {
    const retorno: any = await api.post('usuarios/login', { email, senha });
    const {credenciais} = retorno.data;

    usuario.value = credenciais;
  }

  async function cadastrar(email: string, senha: string) {
    return await api.post('usuarios/signup', { email, senha });
  }

  return {
    usuario, login, cadastrar
  };
});
