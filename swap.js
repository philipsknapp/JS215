/*
10:33 - although I read thought about this a little beforehand, 2-3 mn
got stuck at 11:00, taking a break - probably need to start code fresh
11:11 - new algorithm idea
finished 11:25 - within the hr at least!


Input: string
output: new string

Rules: swap the positions of alphabetic characters and numeric characters.

From looking at examples, seems to follow this logic:
  - if the digit is alphabetic, look for the next numeric and vice versa
  - switch their positions
  - "freeze" them there - they can no longer be swapped by future elements
  - if there is no corresponding alphabetic/numeric character ahead, do not swap

Questions:
Do I ignore/preserve non-alphanumeric chars? Assuming so
Do I preserve case? Assuming so
English alphabet a-zA-Z? Assuming so.
Should I consider any compound values like -1, 1.5, or NaN as single numbers?
Assuming not due to the phrase "numeric character", which I take to mean digit 0-9.

Data Structure:
I think leaving the input as a string makes sense. We could make it an array as well; either way, we're just walking through indices.
We can also have the output be a string that we build up, filling in spaces over time, but I think an  array that starts sparse and fills in makes more sense.

Algorithm:
Create an empty result array
iterate over the string swapping chars, adding swapped pairs to the array
  - skip if the array already has a value at that index
  - for each character:
    - if it's alphabetic,
      - iterate through indices from that point, looking for a number
        - skip if the array already has a value at that index
        - if we find a number, add the number to the result array at the position of the letter, add the letter to the result array at the position of the number
        - if not, just add the letter to the result array at its position
    - if it's numeric,
      - do the same thing, looking for a letter
    - if it's neither, just add it to the result array at its current position
join & return the array

New approach
create a result string and build it up

get all the letters in an array
get all the digits in an array

iterate over the string
  - if it's a letter, shift out the first digit and add to result
    - if there are no digits left in the array, add the letter
  - if it's a digit, vice versa
  - if it's neither letter nor digit, add it to the array


str = "ab$cd 123"
result = ""
letters [a b c d]
digits [1 2 3]

str = "ab$cd 123"
result = "1"
letters [a b c d]
digits [2 3]


str = "ab$cd 123"
result = "12$3d 123"
letters [a b c d]
digits []
*/

function swap(str) {
  const ALPHA = /[a-z]/gi;
  const DIGIT = /\d/g
  let result = ""
  const letters = (str.match(ALPHA) ?? []);
  const digits = (str.match(DIGIT) ?? []);

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if (char.match(ALPHA)) {
      result += (digits.shift() ?? char);
    } else if (char.match(DIGIT)) {
      result += (letters.shift() ?? char);
    } else {
      result += char;
    }
    // console.log(`index ${idx}, result is ${result}, arrays are ${letters} and ${digits}`)
  }
  return result;
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("ABcd123") === "123dABc"); // true
console.log(swap("") === ""); // true
console.log(swap("aBc") === "aBc"); // true
console.log(swap("123123") === "123123"); // true
console.log(swap("ab$cd 123") === "12$3d abc"); // true
console.log(swap("1a2.5b3c") === "a1b.c235"); // true



// function swap(str) {
//   const ALPHA = /[a-z]/i;
//   const DIGIT = /\d/
//   const arr = [];

//   for (let outer_idx = 0; outer_idx < str.length; outer_idx++) {
//     if (arr[outer_idx]) continue;
//     console.log(str[outer_idx]);
//     if (str[outer_idx].match(ALPHA)) {
//       let swapped = false;
//       for (let inner_idx = outer_idx + 1; inner_idx < str.length; inner_idx++) {
//         console.log(inner_idx);
//         if (arr[inner_idx]) continue;
//         if (str[inner_idx].match(DIGIT)) {
//           arr[outer_idx] = str[inner_idx];
//           arr[inner_idx] = str[outer_idx];
//           swapped = true;
//         }
//         if (!swapped) {arr[outer_idx] = str[outer_idx]};
//       }
//     } else {arr[outer_idx] = str[outer_idx]};
//   }
//   console.log(arr);
//   return arr.join();
// }