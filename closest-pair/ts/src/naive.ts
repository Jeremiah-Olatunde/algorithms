
import { type Point, computeDistanceSquared } from "./points.js";

export function cp(points: Point[]): number {
  let d: number = Infinity;

  for(let i = 0; i < points.length; i++)
    for(let j = i + 1; j < points.length; j++)
      d = Math.min(d, computeDistanceSquared(points[i], points[j]));

  return Math.sqrt(d);
}