<script setup lang="ts">
import { computed } from 'vue'
import ButtonQuestion from '../components/ButtonQuestion.vue'
import QuizHeader from '../components/QuizHeader.vue'
import questions from '../assets/questions.json'
import { useQuizStore } from '@/stores/quiz'
import { storeToRefs } from 'pinia'

const btns = [
  { strength: 1, class: 'btn--strong-agree', text: 'Strongly agree' },
  { strength: 0.5, class: 'btn--agree', text: 'Agree' },
  { strength: 0, class: 'btn--neutral', text: 'Neutral' },
  { strength: -0.5, class: 'btn--disagree', text: 'Disagree' },
  { strength: -1, class: 'btn--strong-disagree', text: 'Strongly-Disagree' }
]

const quiz = useQuizStore()

const { currentQuestionIndex } = storeToRefs(quiz)
const testStatus = computed(() => {
  return `${currentQuestionIndex.value + 1}/${questions.length}`
})
const barProgress = computed(() => {
  return `${(currentQuestionIndex.value / (questions.length - 1)) * 100}%`
})
</script>

<template>
  <section>
    <QuizHeader
      :question="questions[currentQuestionIndex]"
      :testStatus="testStatus"
      :barProgress="barProgress"
    />
    <div class="btns">
      <ButtonQuestion
        v-for="(btn, index) in btns"
        :key="index"
        :id="currentQuestionIndex"
        :text="btn.text"
        :strength="btn.strength"
        :class="[btn.class]"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 0 auto;
  max-width: 760px;
}

.btns {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-items: center;
}
.btns .btn {
  width: 100%;
  font-weight: bold;
}
</style>
