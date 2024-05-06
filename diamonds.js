/*
9:17 - 9:31
- saw this problem a long time ago in Ruby material

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

'diamond' in the playing-card sense - a quadrilateral

by 'grid' they mean a set of equal size(?) strings with only whitespace or asterisks. The asterisks draw the diamond.

there will be n strings and the strings are n characters long, at least in the middle. The middle string will be all asterisks; the first and last will be one asterisk

inputs - 'assume the argument will always be an odd integer' - will it always be positive? Do I need to think about the display width of the output, in the case of very large integers? Will it always be passed as a Number object? Does it matter if there's space on the right side of the asterisks as well? Any return value, or just the output is relevant? Any need to handle invalid inputs in any way?

E - the given test cases are descriptive enough, but let's break down the pattern:

diamond(5);
  *
 ***
*****
 ***
  *
row 0: 2 spaces, 1 diamond
row 1: 1 space, 3 diamonds
row 2: 0 spaces, 5 diamonds
row 3: 1 space, 3 diamonds
row 4: 2 spaces, 1 diamond

This is mirrored which suggests some kind of absolute value operation
midpoint is going to be value / 2 rounded down in 0-indexing
absolute value of row - midpoint = number of spaces
size - no.spaces * 2 gives number of diamonds

DS: could be an array of strings, then output each array element. Could also just be build & output each string consecutively; this might even be simpler, since I just need the value of and the current row number (I think)

A:
iterate from 0 to arg - 1. At each iteration:
  - create an empty string
  - append absolute value of (row - midpoint) spaces (string repeat? irb test)
  - append size - (spaces * 2) stars
  - output string
*/

function diamond(size) {
  let midpoint = Math.floor(size / 2);

  for (let row = 0; row < size; row++) {
    let line = '';

    let spaces = Math.abs(row - midpoint);
    line += ' '.repeat(spaces);

    let stars = size - (spaces * 2);
    line += '*'.repeat(stars);

    console.log(line);
  }
}

diamond(1);
// logs
/*
*
*/

diamond(3);
/* logs
 *
***
 *
*/

diamond(9);
// logs
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/