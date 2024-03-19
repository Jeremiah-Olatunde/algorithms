type Point = { x: number, y: number };

export function buildArr<T>(size: number, getItem: (i: number, xs: T[]) => T): T[] {
  const rtnArr: T[] = [];

  for(let i = 0; i < size; i++){
    rtnArr.push(getItem(i, rtnArr));
  }

  return rtnArr;
}

export function random(){ return Math.random(); }

export function randomInt(lowerBound: number, upperBound: number): number {
  return Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;
}

export function randomPoint(
  xRange: [number, number],
  yRange: [number, number],
): Point {
  return {
    x: randomInt(xRange[0], xRange[1]),
    y: randomInt(yRange[0], yRange[1]),
  }
}

export function randomPoints(
  size: number,
  xRange: [number, number],
  yRange: [number, number]
): Array<Point> {
  return buildArr(size, _ => randomPoint(xRange, yRange))
}
