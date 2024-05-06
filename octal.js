"use strict";

// Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number.

// convert string to array of digit characters
// map digits to numbers
// reduce (start at 0, multiply total by 8 and add the current value)

// function octalToDecimal(numberString) {
//   let digits = numberString.split('').map(digit => Number(digit));
//   return digits.reduce((total, digit) => total * 8 + digit, 0);
// }

// given algorithm:
// map array of digits to digits multiplied by powers of 8
// what power? depends on length - index. l0i0 => 8**0 => 1
// l2i0 => 8**2 => 64

function octalToDecimal(numberString) {
  let digits = numberString.split('').map((digit, index, arr) => {
    let place = (arr.length - 1) - index;
    return Number(digit) * (8 ** place);
  });
  return digits.reduce((total, num) => total + num, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9