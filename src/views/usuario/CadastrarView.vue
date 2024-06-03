<script setup lang="ts">

import { ref } from 'vue';
import { useUsuariosStore } from '@/stores/usuario';
import router from '@/router';
import TextInput from '@/components/form/TextInput.vue';
import BaseForm from '@/components/form/FloatingForm.vue';
import type { AxiosError } from 'axios';
import { useAlertaStore } from '@/stores/alerta';

const email = ref('');
const senha = ref('');

function cadastrar() {
  useUsuariosStore().cadastrar(email.value, senha.value).then(() => {
    router.push({ name: 'login', query: { email: email.value } });
  }).catch((error: AxiosError) => {
    useAlertaStore().alertar(error.response?.data?.message ?? ('Ocorreu um erro ao tentar acessar.'));
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
