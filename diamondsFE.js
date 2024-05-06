/*
refactor to hollow diamond 9:58 - 10:08

A:
is there a simple pattern to the hollow diamond positions?
looking at diamond size 9

0123*     // 0: 4
012*4*    // 1: 3, 5
  *345*   // 2: 2, 6
0*23456*  // 3: 1, 7
*1234567* // 4: 0, 8
 *     *  // 5: 1, 7
  *   *   // 6: 2, 6
   * *    // 7: 3, 5
    *     // 8: 4

again, think in terms of absolute value of row - midpoint
0123*     // 4: 4
012*4*    // 3: 3, 5
  *345*   // 2: 2, 6
0*23456*  // 1: 1, 7
*1234567* // 0: 0, 8
 *     *  // 1: 1, 7
  *   *   // 2: 2, 6
   * *    // 3: 3, 5
    *     // 4: 4

position of first diamond: abs row-mdpt
position of second diamond: size - 1st position - 1
or iterate and build up a string
from 0 to right exclusive
if index is left, append '*'; otherwise, ' '
finally append '*'
print
*/

function diamond(size) {
  let midpoint = Math.floor(size / 2);

  for (let row = 0; row < size; row++) {
    let left = Math.abs(row - midpoint);
    let right = size - left - 1;

    let line = '';
    for (let idx = 0; idx < right; idx++) {
      line += (idx == left) ? '*' : ' ';
    }
    line += '*';
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
* *
 *
*/

diamond(9);
// logs
/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/