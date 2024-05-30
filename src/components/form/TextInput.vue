<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  secreto: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <label :for="props.name">{{ props.titulo }}</label>
  <input :type="secreto ? 'password' : 'text'" :name="props.name" @change="(e) => $emit('input', e.target.value)" :value="props.value">
</template>

<style scoped>

</style>
