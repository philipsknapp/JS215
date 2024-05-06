"use strict";

/*
- iterating with forEach, need to set some value like everUnbalanced to false
- it has to start true prior to loop
- then return true only if everUnbalanced is true and unclosed = 0;
*/

function isBalanced(str) {
  let unclosedParens = 0;
  let everUnbalanced = true;
  str.split('').forEach(char => {
    if (char === '(') {
      unclosedParens += 1;
    } else if (char === ')') {
      unclosedParens -= 1;
    }
    if (unclosedParens < 0) {
      everUnbalanced = false;
    }
  });

  return everUnbalanced && (unclosedParens === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false