import { iterate } from '../array'

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function draw<T>(array: readonly T[]): T | null {
  const max = array.length
  if (max === 0)
    return null

  const index = random(0, max - 1)
  return array[index]
}

export function shuffle<T>(array: readonly T[]): T[] {
  return array
    .map(a => ({ rand: Math.random(), value: a }))
    .sort((a, b) => a.rand - b.rand)
    .map(a => a.value)
}

export function uid(length: number = 6, specials: string = '') {
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${specials}`
  return iterate(
    length,
    (acc) => {
      return acc + characters.charAt(random(0, characters.length - 1))
    },
    '',
  )
}
