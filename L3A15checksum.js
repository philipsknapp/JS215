/*
9:58 - 10:14 (16 minutes)

I think the idea of a check digit being appended to a partial number isn't relevant here - we're assuming we're being passed the full number.

Will the number always be a string input, or might it be a number that I need to treat as a list of digits? Assuming I might need to do this; further, if I get a decimal, assuming I should treat everything after the decimal as more digits, not some special value. Never mind - per problem description, "given a number in string format"

Should I output a boolean? Assuming yes - that seems liek the best fit.

Should I treat '-' as non-numeric, or as a negative modifier?

Explicit rule to ignore non-numeric characters

Algorithm:
Convert to an array of digits
  - remove all non-digit characters
  - split to array of characters
  - transform to numbers

since it's more natural to count left to right than right to left (and list processing methods assume left to right), reverse the array

then I think I can just reduce:
  - if index is even, sum to total
  - if index is odd
    - double
    - if >= 10, subtract 9
    - sum to total

check that sum % 10 === 0. If true, return true; if not, return false
*/

function luhn(input) {
  input = input.replace(/[^0-9]/g, '');
  input = input.split('').map(Number);
  input.reverse();
  checksum = input.reduce((sum, digit, idx) => {
    if (idx % 2 === 0) {
      return sum + digit;
    } else {
      digit *= 2;
      if (digit >= 10) { digit -= 9; }
      return sum + digit;
    }
  }, 0);
  return checksum % 10 === 0;
}

console.log(luhn("2323 2005 7766 3554") === true) // true

console.log(luhn("23-23 2aa00@5 (7)766 3554") === true) // true

console.log(luhn("1111") === false) // true

console.log(luhn("8763") === true) // true