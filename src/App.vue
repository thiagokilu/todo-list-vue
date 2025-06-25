<script setup>
import TheTable from "./components/TheTable.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="titulo">Todo list</h1>
      <TheTable />
    </div>
  </header>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.titulo {
  text-align: center;
  font-weight: bold;
}
</style>
