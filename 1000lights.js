/*
7:37 - 7:56 brute force (19mn)
 - note that I've seen this problem already

This seems well defined but -
  - will the argument always be a positive integer?
  - will there always be exactly one argument? What if there's none; what if there's more than 1.
  - I can see from the examples that the outputs are all the squares; why would that be true? Could this stop being true later?

Input: a positive integer n
Output: An array of positive integers where the lowest is 1 and the highest may be n. This is the number of lights that are on after n passes

lightsOn(3) // [1]
round 1: all lights on
round 2: light 2 is off
round 3: light 3 if off

BRUTE FORCE
data structure: array of trues and falses, initially set to falses
  -> go through n passes inverting them.
  -> convert so that the trues are transformed to their indices (+1)
  -> select out the falses

algorithm:
  -> Create array of n false values
    -> push 'false' into the array n times
  -> Take n passes inverting values
    -> nested iteration: from 1-n (passes)
      -> from 0-n (switches), iterating by pass number (0,1,2.... then 0,2,4... etc)
        -> flip the value
  -> structure and return result
    -> transform array
      -> if false leave as is
      -> if true replace with the index +1
    -> select only truthy values
    -> return


ANALYTICAL
Is it assured that all elements will be squares?
To start, this problem is about factors
if a number is off, it got flipped on and off an even number of times, it has an even number of factors, including itself
otherwise it got flipped an odd number of times

it makes sense that this would only be true for squares; otherwise, every factor will have some reciprocal.
1
1, 2
1, 3
1, 2, 4
1, 5
1, 2, 3, 6
1, 7
1, 2, 4, 8
1, 3, 9

The square can have other factors:
1, 2, 4, 5, 10, 20, 25, 50, 100
It just matters that its an odd number

Therefore, just need to generate all squares up to n
-> from 1 to sqrt n rounded down
-> add the squre to a result array
*/


// function lightsOn(switches) {
//   let switchBank = [];
//   for (let i = 0; i < switches; i++) {
//     switchBank.push(false);
//   }

//   for (let interval = 1; interval <= switches; interval++) {
//     for (let idx = interval - 1; idx < switches; idx += interval) {
//       switchBank[idx] = !switchBank[idx];
//     }
//   }

//   return switchBank.map((el, i) => el ? i + 1 : false).filter(el => el);
// }

function lightsOn(switches) {
  let result = [];
  for (let num = 1; num <= Math.floor(Math.sqrt(switches)); num++) {
    result.push(num ** 2);
  }
  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

console.log(lightsOn(3)); // [1]