<script setup lang="ts">
import { onMounted } from 'vue';
import { useTreinoStore } from '@/stores/treino';
import NavBar from '@/components/nav/NavBar.vue';

onMounted(() => {
  useTreinoStore().buscar();
});
</script>

<template>
  <NavBar/>
  <h1>Home</h1>
</template>

<style scoped>

</style>
