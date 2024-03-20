
import { type Point, computeDistance, computeDistanceSquared } from "./points.js";
import { runBenchmarks, loadBenchSuite } from "./benchmark.js";
import { runTests } from "./test.js";


{
  // VERSION 0
  function closestPair(points: Array<Point>): [Point, Point] {
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

  runTests(closestPair);
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite0.json"), 
    "./bench_results/naive_v0/suite0.json"
  );
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite1.json"), 
    "./bench_results/naive_v0/suite1.json"
  );
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite2.json"), 
    "./bench_results/naive_v0/suite2.json"
  );
}

{
  // VERSION 1
  function closestPair(points: Array<Point>): [Point, Point] {
    let pair: [Point, Point] = [ points[0], points[1] ];
    let minDistance: number = Infinity;
  
    for(let i = 0; i < points.length; i++){
      for(let j = i + 1; j < points.length; j++){
        const distance = computeDistance(points[i], points[j]);
  
        if(distance < minDistance){
          minDistance = distance;
          pair = [ points[i], points[j] ];
        }
      }
    }
  
    return pair;
  }

  runTests(closestPair);
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite0.json"), 
    "./bench_results/naive_v1/suite0.json"
  );
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite1.json"), 
    "./bench_results/naive_v1/suite1.json"
  );
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite2.json"), 
    "./bench_results/naive_v1/suite2.json"
  );
}

{
  // VERSION 2
  function closestPair(points: Array<Point>): [Point, Point] {
    let pair: [Point, Point] = [ points[0], points[1] ];
    let minDistance: number = Infinity;
  
    for(let i = 0; i < points.length; i++){
      for(let j = i + 1; j < points.length; j++){
        const distance = computeDistanceSquared(points[i], points[j]);
  
        if(distance < minDistance){
          minDistance = distance;
          pair = [ points[i], points[j] ];
        }
      }
    }
  
    return pair;
  }

  runTests(closestPair);
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite0.json"), 
    "./bench_results/naive_v2/suite0.json"
  );
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite1.json"), 
    "./bench_results/naive_v2/suite1.json"
  );
  runBenchmarks(
    closestPair, 
    loadBenchSuite("./bench_suites/suite2.json"), 
    "./bench_results/naive_v2/suite2.json"
  );
}