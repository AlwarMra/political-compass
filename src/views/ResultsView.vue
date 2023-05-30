<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { drawCompass, calculateAxis } from '../utils'
import compassImg from '../assets/compass.png'
import { RouterLink, useRoute } from 'vue-router'
import questions from '../assets/questions.json'
import type { Answer } from 'types'

const img = new Image()
img.src = compassImg
const canvas = ref()

const route = useRoute()
let query = route.query.r!
const answers: Answer[] = JSON.parse(query.toString())

const right = calculateAxis(questions, answers, 'right')
const auth = calculateAxis(questions, answers, 'auth')

onMounted(async () => {
  const ctx = canvas.value!.getContext('2d')
  canvas.value!.width = img.width
  canvas.value!.height = img.height
  await drawCompass(ctx, { x: right, y: auth })
})
</script>

<template>
  <div class="">
    <canvas ref="canvas" id="compass"></canvas>
  </div>
  <div>
    <RouterLink to="quiz" class="btn">Take the test again</RouterLink>
  </div>
</template>

<style scoped>
div {
  max-width: 500px;
  margin: 0 auto;
}
div canvas {
  width: 100%;
  background-image: url('../assets/compass.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
