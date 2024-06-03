<script setup lang="ts">

import TreinoAnchor from '@/components/treinos/TreinoAnchor.vue';
import BaseButton from '@/components/BaseButton.vue';
import { useTreinoStore } from '@/stores/treino';
import type { AxiosError } from 'axios';
import { useAlertaStore } from '@/stores/alerta';

const props = defineProps({
  treino: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['removido']);

async function remover() {
  await useTreinoStore().remover(props.treino.id).catch((error: AxiosError) => {
    useAlertaStore().alertar(error.response?.data?.message ?? ('Ocorreu um erro ao tentar acessar.'));
  });;

  emit('removido');
}
</script>

<template>
  <div class="container">
    <h3>{{ props.treino.descricao }}</h3>
    <div class="actions">
      <TreinoAnchor :id="props.treino.id" style="margin-right: 5px"/>
      <BaseButton background-color="#cc5858" @clicado="remover">Remover</BaseButton>
    </div>

  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: white;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 0;
}

h3 {
  margin: auto 0; padding: 0
}
</style>
