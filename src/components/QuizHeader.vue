<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps(['question', 'barProgress', 'testStatus'])
</script>

<template>
  <div class="bar">
    <div :style="{ width: props.barProgress }" class="bar__completition">
      <span>Question {{ props.testStatus }}</span>
    </div>
  </div>
  <h1>{{ props.question.question }}</h1>
</template>

<style scoped>
.bar {
  width: 300px;
  height: 50px;
  border: 3px solid var(--color-text);
  margin-bottom: 2rem;
}
.bar__completition {
  height: 100%;
  background-color: rgba(var(--vt-c-green), 0.5);
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.bar__completition span {
  display: inline-block;
  margin-left: 0.5rem;
}
h1 {
  max-width: 760px;
  margin: 0 auto;
  border: 3px solid black;
  padding: 1rem;
  margin-bottom: 2rem;
  height: 180px;
  display: flex;
  align-items: center;
}
</style>
