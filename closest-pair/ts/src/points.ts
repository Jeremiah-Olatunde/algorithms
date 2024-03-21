import { buildArr } from "./array.js";

export type Point = [number, number];

function randomInt(lowerBound: number, upperBound: number): number {
  return Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;
}

export function randomPoint(
  xRange: [number, number],
  yRange: [number, number],
): Point {
  return [
    randomInt(xRange[0], xRange[1]),
    randomInt(yRange[0], yRange[1]),
  ];
}

export function randomPoints(
  size: number,
  xRange: [number, number],
  yRange: [number, number]
): Array<Point> {
  return buildArr(size, _ => randomPoint(xRange, yRange))
}

export function computeDistanceSquared(p: Point, q: Point): number {
  return Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
}

export function toDesmosPointList(points: Point[]): string {
  return `[${points.map(([x, y]) => `(${x}, ${y})`).join(",")}]`
}

