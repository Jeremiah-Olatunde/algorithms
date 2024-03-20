

export function benchmark<T, R>(
  func: (x: T) => R,
  inputs: T[],
  runs = 1,
): Array<[T, number]> {

  return inputs.map(input => {
    let totalTime = 0;

    for(let i = 0; i < runs; i++){
      const start = Date.now();
      const result = func(input);
      const end = Date.now();

      totalTime += end - start;
    }

    return [input, totalTime / runs]
  })

}

