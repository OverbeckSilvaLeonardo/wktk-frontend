<script setup lang="ts">
import { RouterView } from 'vue-router';
import FloatingAlerta from '@/components/alert/FloatingAlerta.vue';
</script>

<template>
  <FloatingAlerta />
  <RouterView/>
</template>
