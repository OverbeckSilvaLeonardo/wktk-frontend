<script setup lang="ts">
import { onMounted } from 'vue';
import { useTreinoStore } from '@/stores/treino';

onMounted(() => {
  useTreinoStore().buscar();
});
</script>

<template>
  <h1>Home</h1>
</template>

<style scoped>

</style>
