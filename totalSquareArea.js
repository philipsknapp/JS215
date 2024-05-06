"use strict";
/*
For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

transform input to array of areas (first element * second element)
reduce to sum and return
*/

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1])
  return areas.reduce((total, area) => total + area);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles){
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121