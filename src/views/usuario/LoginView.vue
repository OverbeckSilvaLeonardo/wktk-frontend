<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUsuariostore } from '@/stores/usuario';
import router from '@/router';
import TextInput from '@/components/form/TextInput.vue';
import BaseForm from '@/components/form/FloatingForm.vue';
import ButtonAnchor from '@/components/form/ButtonAchor.vue';

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
    <BaseForm botao="Login" titulo="Member Login" @submit="login" style="margin-top: 300px">
      <template #default>
        <TextInput titulo="E-mail" name="email" v-model="email"/>
        <TextInput titulo="Senha" name="senha" v-model="senha" secreto/>
      </template>
      <template #form-footer>
        <ButtonAnchor :to="{name: 'cadastrar'}">REGISTER</ButtonAnchor>
      </template>
    </BaseForm>
</template>

<style scoped lang="scss">
.cadastre-se {
  text-align: center;
  color: white;
  text-decoration: none;
  margin: auto;
}
</style>
