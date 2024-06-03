import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertaStore = defineStore('alerta', () => {
  const alerta = ref('');

  function alertar(message: string) {
    alerta.value = message;

    setTimeout(() => {alerta.value = ''}, 2000)
  }

  return {alertar, alerta}
});
