<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsuariosStore } from '@/stores/usuario';
import router from '@/router';
import BaseLogo from '@/components/BaseLogo.vue';

onMounted(() => {
  const logado = useUsuariosStore().usuario;

  if (!logado.user) {
    router.push({ name: 'login' });
  }
})
</script>

<template>
  <BaseLogo />
  <router-view />
</template>

