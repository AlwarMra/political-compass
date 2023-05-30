<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>Political Compass</header>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  padding: 1rem;
  color: var(--color-main);
  font-weight: bold;
  font-size: 2rem;
  border-bottom: 1px solid var(--color-main);
}
</style>
