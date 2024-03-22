import { type Point, computeDistanceSquared } from "./points";

export function cp(points: Point[]): number {
  const sortedX = points.toSorted((a, b) => a[0] - b[0]);
  return f(sortedX);

  function f(points: Array<Point>): number {
    if(points.length === 2){
      return computeDistanceSquared(points[0], points[1]);
    }

    if(points.length === 3){
      return Math.min(
        computeDistanceSquared(points[0], points[1]),
        computeDistanceSquared(points[0], points[2]),
        computeDistanceSquared(points[1], points[2]),
      )
    }

    const split = Math.floor(points.length / 2);

    const dl = f(points.slice(0, split));
    const dr = f(points.slice(split))
    let d = Math.min(dl, dr);

    const stripL = points[split][0] - d; 
    const stripR = points[split][0] + d; 
    const strip = points
                    .filter(([x]) => stripL <= x && x <= stripR)
                    .sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < strip.length; i++)
      for(let j = i + 1; j < Math.min(7, strip.length); j++)
        d = Math.min(d, computeDistanceSquared(strip[i], strip[j]));
    
    return Math.sqrt(d);
  }
}