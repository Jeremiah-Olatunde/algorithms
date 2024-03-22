import { createWriteStream } from "fs";

import { buildArr } from "./array.js";
import { randomPoints, type Point, toDesmosPointList } from "./points.js";

import * as naive from "./naive.js";
import * as divNCqr from "./div_and_cqr.js";


function time<T, R>(f: (x: T) => R, input: T): number {
  const start = Date.now();
  const result = f(input);
  return Date.now() - start;
}

const suite = buildArr(100, i => {
    const pointCount = (i + 1) * 100;
    const range = 1_000_000;
    return [
      pointCount, 
      randomPoints(pointCount, [-range, range], [-range, range])
    ] as [number, Point[]]
  }
);

const naiveResults: [number, number][] = suite.map(([n, test]) => [n, time(naive.cp, test)]);
const divNCqrResults: [number, number][] = suite.map(([n, test]) => [n, time(divNCqr.cp, test)]);

const wstream = createWriteStream("./benchmarks/results.txt", { encoding: "utf-8", flags: "a" });



wstream.write(new Date().toString() + "\n");
wstream.write("NAIVE => " + toDesmosPointList(naiveResults) + "\n");
wstream.write("DIVIDE N CONQUER => " + toDesmosPointList(divNCqrResults) + "\n");
wstream.write("\n");