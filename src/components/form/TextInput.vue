<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
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
  },
  dark: {
    type: Boolean,
    default: true,
  }
});
</script>

<template>
<!--  <label :for="props.name">{{ props.titulo }}</label>-->
  <input
      :type="secreto ? 'password' : 'text'"
      :name="props.name"
      @input="(e) => emit('update:modelValue', e.target.value)"
      :value="props.modelValue"
      :placeholder="props.titulo"
      :class="dark ? 'dark' : '' "
  />
</template>

<style scoped>
label {
  margin-bottom: 5px;
  color: black;
}

input {
  margin-bottom: 20px;
  height: 35px;
  border: none;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.dark {
  background-color: #1e1e1e;
  color:white;
}
</style>
