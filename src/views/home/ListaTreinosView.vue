<script setup lang="ts">
import TreinosLista from '@/components/treinos/TreinosLista.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <TreinosLista/>
  <BaseButton type="button" @clicado="$router.push({name: 'novo-treino'})">NOVO TREINO</BaseButton>
</template>

<style scoped lang="scss">

</style>
