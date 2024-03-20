
import { type Point, computeDistance } from "./points.js";

// store the current minimum distance (initialize at infinity)
// compute the distance between ever possible pair of points
// return the pair with the minimu distance

export function closestPair(points: Array<Point>): [Point, Point] {
  let pair: [Point, Point] = [ points[0], points[1] ];
  let minDistance: number = Infinity;

  for(let i = 0; i < points.length; i++){
    for(let j = 0; j < points.length; j++){
      if(i == j) continue;

      const distance = computeDistance(points[i], points[j]);

      if(distance < minDistance){
        minDistance = distance;
        pair = [ points[i], points[j] ];
      }
    }
  }

  return pair;
}
