<script setup lang="ts">
import { useTreinoStore } from '@/stores/treino';
import { onMounted, ref } from 'vue';
import type { ITreino } from '@/interfaces/treino.interface';
import TreinoVisualizacao from '@/components/treinos/TreinoVisualizacao.vue';
import ButtonAchor from '@/components/form/ButtonAchor.vue';
import BaseButton from '@/components/BaseButton.vue';
import router from '@/router';
import type { AxiosError } from 'axios';
import { useAlertaStore } from '@/stores/alerta';

const props = defineProps({
  id: String
});

const treino = ref<ITreino>({} as ITreino);
const editar = ref(false);

async function salvarEdicao() {
  await useTreinoStore().remover(props.id).catch((error: AxiosError) => {
    useAlertaStore().alertar(error.response?.data?.message ?? ('Ocorreu um erro ao tentar acessar.'));
  });
  await useTreinoStore().gravar(treino.value).catch((error: AxiosError) => {
    useAlertaStore().alertar(error.response?.data?.message ?? ('Ocorreu um erro ao tentar acessar.'));
  });

  return router.push({ name: 'treinos' });
}

onMounted(async () => {
  treino.value = await useTreinoStore().find(props.id);
});
</script>

<template>
  <div class="container">
    <TreinoVisualizacao v-model="treino" :edit="editar" />
    <div class="actions">
      <ButtonAchor :to="{name: 'treinos'}" v-if="!editar">Voltar</ButtonAchor>
      <BaseButton @clicado="editar = false" v-else background-color="#cc5858">Cancelar</BaseButton>

      <BaseButton @clicado="editar = true" v-if="!editar">Editar</BaseButton>
      <BaseButton @clicado="salvarEdicao" v-else>Salvar</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.actions {
  display: flex;
  gap: 10px;
}
</style>
