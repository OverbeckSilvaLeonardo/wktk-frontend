<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuariosStore } from '@/stores/usuario';
import router from '@/router';
import TextInput from '@/components/form/TextInput.vue';
import FloatingForm from '@/components/form/FloatingForm.vue';
import ButtonAnchor from '@/components/form/ButtonAchor.vue';
import { useAlertaStore } from '@/stores/alerta';
import type { AxiosError } from 'axios';

const email = ref('');
const senha = ref('');

function login() {
  useUsuariosStore().login(email.value, senha.value).then(() => {
    router.push({ name: 'treinos' });
  }).catch((error: AxiosError) => {
    useAlertaStore().alertar(error.response?.data?.message ?? ('Ocorreu um erro ao tentar acessar.'));
  });
}

onMounted(() => {
  if (useRouter().currentRoute.value.query.email) {
    email.value = useRouter().currentRoute.value.query.email;
  }
});
</script>

<template>
    <FloatingForm botao="Login" titulo="Member Login" @submit="login" style="margin-top: 200px">
      <template #default>
        <TextInput titulo="E-mail" name="email" v-model="email"/>
        <TextInput titulo="Senha" name="senha" v-model="senha" secreto/>
      </template>
      <template #form-footer>
        <ButtonAnchor :to="{name: 'cadastrar'}">REGISTER</ButtonAnchor>
      </template>
    </FloatingForm>
</template>

<style scoped lang="scss">
.cadastre-se {
  text-align: center;
  color: white;
  text-decoration: none;
  margin: auto;
}
</style>
