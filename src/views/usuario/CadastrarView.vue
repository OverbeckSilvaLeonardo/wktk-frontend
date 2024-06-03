<script setup lang="ts">

import { ref } from 'vue';
import { useUsuariosStore } from '@/stores/usuario';
import router from '@/router';
import TextInput from '@/components/form/TextInput.vue';
import BaseForm from '@/components/form/FloatingForm.vue';

const email = ref('');
const senha = ref('');

function cadastrar() {
  useUsuariosStore().cadastrar(email.value, senha.value).then(() => {
    router.push({ name: 'login', query: { email: email.value } });
  }).catch((error: Error) => {
    console.error(error);
  });
}

</script>

<template>
    <BaseForm botao="Cadastre-se" titulo="Cadastre-se" @submit="cadastrar" style="margin-top: 200px">
      <TextInput titulo="E-mail" name="email" v-model="email"/>
      <TextInput titulo="Senha" name="senha" v-model="senha" secreto/>
    </BaseForm>
</template>

<style scoped lang="scss">

</style>
