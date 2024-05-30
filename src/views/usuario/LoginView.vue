<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuariostore } from '@/stores/usuario';
import router from '@/router';
import BaseInput from '@/components/form/TextInput.vue';
import SubmitButton from '@/components/form/SubmitButton.vue';

const email = ref('');
const senha = ref('');

function login() {
  useUsuariostore().login(email.value, senha.value).then(() => {
    router.push({ name: 'home' });
  }).catch((error: Error) => {
    console.error(error);
  });
}

onMounted(() => {
  if (useRouter().currentRoute.value.query.email) {
    email.value = useRouter().currentRoute.value.query.email;
  }
});
</script>

<template>
  <div>
    <h1>Login</h1>
    <form action="#" @submit.prevent="login">
      <BaseInput titulo="E-mail" name="email" v-model="email"/>
      <BaseInput titulo="Senha" name="senha" v-model="senha" secreto/>
      <SubmitButton>Login</SubmitButton>
    </form>

    <router-link to="/cadastrar">Cadastre-se</router-link>
  </div>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
}
</style>
