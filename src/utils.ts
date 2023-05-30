import type { Answer, Question } from 'types'

export function drawCompass(ctx: CanvasRenderingContext2D, axis: { x: number; y: number }) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.beginPath()
  ctx.arc(200 + (1000 * (axis.x + 10)) / 20, 1150 - (1000 * (axis.y + 10)) / 20, 25, 0, 2 * Math.PI)
  ctx.fillStyle = 'red'
  ctx.fill()
  ctx.stroke()
  return
}

export const calculateAxis = (
  questions: Question[],
  answers: Answer[],
  param: 'auth' | 'right' | 'prog'
) => {
  return questions
    .filter((q) => param in q.effects)
    .reduce((sum, q) => sum + answers[q.id].strength * q.effects[param]!, 0)
}
