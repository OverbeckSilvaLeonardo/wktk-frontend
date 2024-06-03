import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/api';
import { useRouter } from 'vue-router';
import type { ITreino } from '@/interfaces/treino.interface';
import { useUsuariosStore } from '@/stores/usuario';

export const useTreinoStore = defineStore('treino', () => {
  const treinos = ref<ITreino[]>([]);

  async function buscar() {
    const userId = useUsuariosStore().usuario.user.uid ?? undefined;

    if (!userId) {
      return useRouter().push({name: 'login'});
    }

    const retorno = await api.get(`/treinos?userId=${ userId }`);

    treinos.value = retorno.data.treinos;
  }

  async function find(id: string = '') {
    if (treinos.value.length === 0) {
      await buscar();
    }

    return treinos.value.find(treino => treino.id === id);
  }

  async function gravar(treino: ITreino) {
    const userId = useUsuariosStore().usuario.user.uid ?? undefined;

    if (!userId) {
      return useRouter().push({name: 'login'});
    }

    await api.post(`/treinos?userId=${ userId }`, treino);
  }

  async function remover(id: string) {
    const userId = useUsuariosStore().usuario.user.uid ?? undefined;

    if (!userId) {
      return useRouter().push({name: 'login'});
    }

    await api.delete(`/treinos/${id}?userId=${ userId }`);
  }

  return { buscar, find, gravar, remover, treinos };
});
