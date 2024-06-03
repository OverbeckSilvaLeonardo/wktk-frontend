<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTreinoStore } from '@/stores/treino';
import type { ITreino } from '@/interfaces/treino.interface';
import TreinosItem from '@/components/treinos/TreinosItem.vue';

const treinos = ref<ITreino[]>([]);

async function atualizar() {
  const store = useTreinoStore();
  await store.buscar();
  treinos.value = store.treinos;
}

onMounted(async () => {
  await atualizar();
});
</script>

<template>
  <div>
    <TreinosItem v-for="treino of treinos" :key="treino.id" :treino="treino" @removido="atualizar"/>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
}

@media (min-width: 1024px) {
  div {
    flex-direction: row;
    width: 100%;
    gap: 10px;
  }
}
</style>
