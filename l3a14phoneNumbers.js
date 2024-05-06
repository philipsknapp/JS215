/*
9:37-9:41, 9:47-9:54 (11 mn)

clean up phone numbers by removing special characters.

By saying special characters "should be ignored", I'm assuming remove from the output.

I'm also going to assume we're always dealing with strings, input and output.

DS: I think i can just work by repeatedly adjusting/reassigning the input value, without a more complex data structure

A:
reassign input 'phoneNum' remove everything that isn't a digit
count the digits
if there are ten return phoneNum
if there are 11 and the first digit is 1, return the last 10 digits of phoneNum
otherwise return '0000000000'
*/

function cleanPhone(phoneNum) {
  const badOutput = '0000000000';

  phoneNum = phoneNum.replace(/[^0-9]/g, '');
  if (phoneNum.length === 10) {
    return phoneNum;
  } else if (phoneNum.length === 11 && phoneNum[0] === '1') {
    return phoneNum.slice(1);
  }

  return badOutput;
}

console.log(cleanPhone('1234567890') === "1234567890") // true
console.log(cleanPhone('(123) 456-7890') === "1234567890") // true
console.log(cleanPhone('1 (123) 456-7890') === '1234567890') // true
console.log(cleanPhone('(123)456--890') === '0000000000') // true
console.log(cleanPhone('') === '0000000000') // true
console.log(cleanPhone('(123)456-78901') === '2345678901') // true
console.log(cleanPhone('9(123)456-7890') === '0000000000') // true
console.log(cleanPhone('123123123123123123') === '0000000000') // true