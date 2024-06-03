<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <router-link :to="{name: 'treino', params: {id: props.id}}">Acessar</router-link>
</template>

<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 12px;
  border: none;
  background-color: #389a75;
}

a:hover {
  color: black;
  background-color: #d9d9d9;
  font-weight: 700;
}
</style>
