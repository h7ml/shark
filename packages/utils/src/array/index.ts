export function iterate<T>(
  count: number,
  func: (currentValue: T, iteration: number) => T,
  initValue: T,
) {
  let value = initValue
  for (let i = 1; i <= count; i++) value = func(value, i)

  return value
}
