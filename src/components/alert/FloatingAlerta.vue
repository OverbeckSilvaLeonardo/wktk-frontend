<script setup lang="ts">
import { useAlertaStore } from '@/stores/alerta';
import { computed } from 'vue';

const alerta = computed(() => useAlertaStore().alerta);
</script>

<template>
  <div class="container" v-if="alerta.length">
    {{ alerta }}
  </div>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  padding: 10px;
  right: 10px;
  background-color: #cc5858;
  color: white;
  font-weight: 500;
  z-index: 1000;
  max-width: 300px;
}
</style>
