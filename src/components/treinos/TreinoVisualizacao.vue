<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  edit: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:modelValue']);

function adicionarExercicio() {
  const novo = props.modelValue;
  const exercicios = props.modelValue.exercicios ?? [];

  novo.exercicios = [{ descricao: '', intensidade: undefined, volume: undefined }, ...exercicios];

  emit('update:modelValue', novo);
}

function updateExercicio(index: number, campo: string, valor: string | number): void {
  const novo = props.modelValue;

  novo.exercicios[index][campo] = valor;

  emit('update:modelValue', novo);

}

</script>

<template>
  <h3 v-if="!edit">{{ modelValue.descricao }}</h3>

  <div class="title-container" v-else>
    <input type="text" @input="(e) => emit('update:modelValue', {...modelValue, descricao: e.target.value})" :value="modelValue.descricao">
    <BaseButton v-if="edit" @clicado="adicionarExercicio">+EXERCÍCIO</BaseButton>
  </div>

  <div class="exercicios">
    <div class="exercicios-item" v-for="(exercicio, index) of modelValue.exercicios" :key="index">
      <h3 class="exercicios-item-title" v-if="!edit">{{ exercicio.descricao }}</h3>
      <input v-else type="text" @input="(e) => updateExercicio(index, 'descricao', e.target.value)" :value="exercicio.descricao" placeholder="Descrição">
      <h3 class="exercicios-item-title" v-if="!edit">{{ exercicio.volume }}</h3>
      <input v-else type="number" @input="(e) => updateExercicio(index, 'volume', e.target.value)" :value="exercicio.volume" placeholder="Volume">
      <h3 class="exercicios-item-title" v-if="!edit">{{ exercicio.intensidade }}</h3>
      <input v-else type="number" @input="(e) => updateExercicio(index, 'intensidade', e.target.value)" :value="exercicio.intensidade" placeholder="Intensidade">
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-container {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  input {
    margin-bottom: 0px;
  }
}

input {
  font-size: 12px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  border: none;
  height: 20px;
}

h3 {
  font-size: 12px;
  background-color: white;
  padding: 10px;
  margin: 0 0 10px 0;
  height: 20px;
}

.exercicios {
  margin-bottom: 10px;
  &-item {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;

    &-title {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
