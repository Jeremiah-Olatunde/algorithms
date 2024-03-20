

export function benchmark<T, R>(
  func: (x: T) => R,
  inputs: T[]
): Array<[T, number]> {

  return inputs.map(input => {
    const start = Date.now();
    const result = func(input);
    const end = Date.now();

    return [input, end - start]
  })

}