<script setup lang="ts">

import { ref } from 'vue';
import { useUsuariostore } from '@/stores/usuario';
import router from '@/router';
import BaseInput from '@/components/form/TextInput.vue';
import SubmitButton from '@/components/form/SubmitButton.vue';

const email = ref('');
const senha = ref('');

function cadastrar() {
  useUsuariostore().cadastrar(email.value, senha.value).then(() => {
    router.push({ name: 'login', query: { email: email.value } });
  }).catch((error: Error) => {
    console.error(error);
  });
}

</script>

<template>
  <div>
    <h1>Cadastrar</h1>
    <form action="#" @submit.prevent="cadastrar">
      <BaseInput titulo="E-mail" name="email" v-model="email"/>
      <BaseInput titulo="Senha" name="senha" v-model="senha" secreto/>
      <SubmitButton>Cadastrar</SubmitButton>
    </form>
  </div>
</template>

<style scoped lang="scss">
div {
  //background-color: gray;
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
}
</style>
