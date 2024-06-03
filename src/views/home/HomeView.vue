<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 10px;
  margin: 20px auto;
}

@media (min-width: 1024px) {
  .container {
    width: 80%;
  }
}
</style>
<script setup lang="ts">
</script>
