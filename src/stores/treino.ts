import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useUsuariostore } from '@/stores/usuario';
import api from '@/api';
import { useRouter } from 'vue-router';

export const useTreinoStore = defineStore('treino', () => {
  const treinos = ref([]);

  async function buscar() {
    const userId = useUsuariostore().usuario.user.uid ?? undefined;

    if (!userId) {
      return useRouter().push({name: 'login'});
    }

    const retorno = await api.get(`/treinos?userId=${ userId }`);

    treinos.value = retorno.data.treinos;
  }

  return { buscar, treinos };
});
