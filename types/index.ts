export type Answer = {
  id: number
  strength: number
}

export type Question = {
  id: number
  question: string
  effects: {
    [key in 'right' | 'auth' | 'prog']?: number
  }
}
