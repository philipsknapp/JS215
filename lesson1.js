"use strict";

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
}

function myFilter(array, func) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          // { a: 5, b: 12, c: 13 },
          // { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function multiplesOfThreeOrFive(values) {
  return values.filter(isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

// console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]

function myMap(array, func) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
      result.push(func(array[i], i, array));
  }
  return result;
}

function myMap(array, func) {
  const result = [];
  array.forEach((el, index, arr) => {
      result.push(func(el, index, arr));
  });
  return result;
}

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

function getBooksTitle(books) {
  return books.map(getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

// console.log(getBooksTitle(books));
// // console output
// // [
// //   "JavaScript and JQuery: Interactive Front-End Web Development",
// //   "Eloquent JavaScript: A Modern Introduction to Programming",
// //   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// // ]

//adjust based on whether initial value is provided
//if not, treat
function myReduce(array, func, initial) {
  let [accumulator, startIndex] = (initial) ? [initial, 0] : [array[0], 1];
  for (let index = startIndex; index < array.length; index++) {
    accumulator = func(accumulator, array[index], index, array);
  }
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

// console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i], i, array)) return false;
  }
  return true;
}

let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false