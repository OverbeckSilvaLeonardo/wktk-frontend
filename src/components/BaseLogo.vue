<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>BETTER</h1>
    <h2>FIT</h2>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 100px;
  position: relative;
}

.left, .right {
  position: absolute;
  display: block;
  height: 15px;
  width: calc(50% - 100px);
  background-color: #389a75;
  top: 20px;
  z-index: 1;
}

.left {
  left: 0 !important;
}
.right {
  right: 0;
}

h1 {
  color: #389a75;
  text-align: center;
  font-size: 2.5rem;
  margin:0;padding: 0;
}

h2 {
  color: white;
  text-align: center;
  font-size: 2rem;
  margin:0;padding: 0;

}
</style>
