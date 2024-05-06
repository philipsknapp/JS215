/*
version numbers
version numbers are effectively lists of integers separated by periods. We compair placewise:
1.1 < 1.2
1.2 < 1.18
1.2 = 1.2.0
1.2 < 1.2.1

I'm assuming the arguments will start as strings, because 1.0.3.2 isn't legal number notation
Break each argued version into an array using the period as delimiter. convert all elements to numbers

Iterate over indices and compare index-wise
if v1[0] > v2[0], v1 > v2, same for <. Return 1 or -1 respectively

otherwise, check next index (up to last index of longer array)
  - we could either remove trailing zeroes or just add them as needed when comparing numbers. Let's add them
  - if the array doesn't have a value at that index, set to 0 instead
  - if we're at the last index and the values are equal, return 0

List abstractions don't seem as valuable here since we're going idx by idx and might short-circuit
*/

function compareVersions(v1, v2) {
  v1 = v1.split('.').map(digits => Number(digits));
  v2 = v2.split('.').map(digits => Number(digits));
  let final_idx = Math.max(v1.length, v2.length) - 1;

  for (let idx = 0; idx <= final_idx; idx++) {
    let el1 = v1[idx] ?? 0;
    let el2 = v2[idx] ?? 0;
    if (el1 > el2) {
      return 1;
    } else if (el1 < el2) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.1') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);