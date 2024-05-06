"use strict";

/*
return true if parentheses are balanced:
- as we go from left to right, there must always be ( >= )
- at the end of the string, needs to be same number

- iterate through string with a counter `unclosedParens`
- if the char is (, increment it; if it's ), decrement it
- if unclosedParens is ever less than 0, return false
- after iteration, return true if unclosedParens is 0
*/

function isBalanced(str) {
  let unclosedParens = 0;
  for (let char of str) {
    if (char === '(') {
      unclosedParens += 1;
    } else if (char === ')') {
      unclosedParens -= 1;
    }
    if (unclosedParens < 0) {
      return false;
    }
  }

  return (unclosedParens === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false