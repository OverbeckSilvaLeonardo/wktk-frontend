<script setup lang="ts">
import BaseButton from '@/components/form/BaseButton.vue';
import router from '@/router';

const props = defineProps({
  to: {
    type: Object,
    required: true,
  }
});

function navegar() {
  router.push(props.to)
}
</script>

<template>
    <BaseButton @clicado="navegar" background-color="#389a75"><slot/></BaseButton>
</template>

