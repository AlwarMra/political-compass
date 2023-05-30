import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Answer } from 'types'
import router from '@/router'
import questions from '../assets/questions.json'

export const useQuizStore = defineStore('quiz', () => {
  const currentQuestionIndex = ref(0)
  const answers: Answer[] = reactive([])

  function answerQuestion(answer: Answer) {
    answers.push(answer)

    if (questions.length === answers.length) {
      const parsedAnswers = JSON.stringify(answers)
      const urlParams = encodeURIComponent(parsedAnswers)
      router.push('/results?r=' + urlParams)
      return $reset()
    }
    return currentQuestionIndex.value++
  }

  function $reset() {
    currentQuestionIndex.value = 0
    answers.length = 0
  }

  return { answerQuestion, $reset, answers, currentQuestionIndex }
})
