<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  backgroundColor: {
    default: "fff"
  }
})

const emit = defineEmits(["clicado"])
</script>

<template>
  <button :type="props.type" @click="emit('clicado')" :style="{backgroundColor: props.backgroundColor}">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  height: 40px;
  border: none;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
}

</style>
