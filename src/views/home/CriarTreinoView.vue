<script setup lang="ts">

import TreinoVisualizacao from '@/components/treinos/TreinoVisualizacao.vue';
import type { ITreino } from '@/interfaces/treino.interface';
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import ButtonAchor from '@/components/form/ButtonAchor.vue';
import { useTreinoStore } from '@/stores/treino';
import router from '@/router';
import type { AxiosError } from 'axios';
import { useAlertaStore } from '@/stores/alerta';

const treino = ref<ITreino>({
  id: undefined,
  descricao: 'Novo treino',
  exercicios: [],
});

async function criarTreino() {
  await useTreinoStore().gravar(treino.value).catch((error: AxiosError) => {
    useAlertaStore().alertar(error.response?.data?.message ?? ('Ocorreu um erro ao tentar acessar.'));
  });

  return router.push({ name: 'treinos' });
}
</script>

<template>
  <div class="container">
    <TreinoVisualizacao v-model="treino" edit/>
    <div class="actions">
      <ButtonAchor :to="{name: 'treinos'}">Voltar</ButtonAchor>
      <BaseButton @clicado="criarTreino">Salvar</BaseButton>
    </div>
  </div>

</template>

<style scoped lang="scss">
.actions {
  display: flex;
  gap: 10px;
}
</style>
