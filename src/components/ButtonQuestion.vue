<script setup lang="ts">
import { defineProps } from 'vue'
import { useQuizStore } from '@/stores/quiz'

const { answerQuestion } = useQuizStore()
const props = defineProps(['text', 'childClass', 'id', 'strength'])
</script>
<template>
  <button @click="answerQuestion({ id: props.id, strength: props.strength })" class="btn">
    {{ props.text }}
  </button>
</template>
