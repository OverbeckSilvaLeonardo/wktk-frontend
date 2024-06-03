<script setup lang="ts">

import SubmitButton from '@/components/form/SubmitButton.vue';
import { useSlots } from 'vue';

const emit = defineEmits(['submit']);
const props = defineProps({
  titulo: {
    type: String,
    required: true,
  },
  botao: {
    type: String,
    required: true,
  }
});

const temSlot = (nome: string) => !!useSlots()[nome]
</script>

<template>
  <div class="container">
    <h1>{{ props.titulo.toUpperCase() }}</h1>
    <form @submit.prevent="emit('submit')">
      <slot name="default"></slot>
      <SubmitButton>{{ props.botao.toUpperCase() }}</SubmitButton>

      <div class="divider" v-if="temSlot('form-footer')"></div>
      <slot name="form-footer"/>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  //top: 200px;
  width: 300px;
  margin: auto;
  background: rgb(32,39,48);
  background: linear-gradient(120deg, rgba(32,39,48,1) 0%, rgba(0,53,65,1) 52%, rgba(28,45,39,1) 100%);
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 20px;
  color: white;
}

.divider {
  width: 100%;
  height: 2px;
  background: rgb(50,50,50);
  background: linear-gradient(180deg, rgba(50,50,50,0.5) 0%, rgba(50,50,50,0.5) 49%, rgba(187,187,187,0.5) 50%, rgba(187,187,187,0.5) 100%);
  margin: 20px 0 20px;
}
</style>
