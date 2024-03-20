import { type Point, randomPoints, toDesmosPointList } from "./points";
import { writeFileSync, readFileSync } from "fs";

function buildArr<T>(
  size: number, 
  getItem: (i: number, xs: T[]) => T
): T[] {
  const rtnArr: T[] = [];
  for(let i = 0; i < size; i++) rtnArr.push(getItem(i, rtnArr));
  return rtnArr;
}

export function createBenchSuite(file: string): void {
  const inputs = buildArr(100, i => randomPoints(i * 100, [-1000, 1000], [-1000, 1000]));
  const wstream = writeFileSync(file, JSON.stringify(inputs), { encoding: "utf-8"});
}

export function loadBenchSuite(file: string): Point[][] {
  return JSON.parse(readFileSync(file, { encoding: "utf-8" }));
}


export function runBenchmarks(
  closestPair: (points: Array<Point>) => [Point, Point],
  benchSuite: Point[][], 
  file: string
): void {
  const benchResults: [number, number][] = benchSuite.map(input => {
    const start = Date.now();
    const result = closestPair(input);
    const end = Date.now();

    return [input.length, end - start]
  });


  writeFileSync(
    file, 
    JSON.stringify({
      nodeArray: benchResults,
      desmosList: toDesmosPointList(benchResults)
    }), 
    { encoding: "utf-8"}
  );
}