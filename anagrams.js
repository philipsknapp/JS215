"use strict";

/*
take two args
return a new array with all the elements of the second arg that are anagrams of the first arg
anagram means same number of same characters; also means that if you sort the chars in alphabetical order, they look the same
filter based on anagram ness
make a helper isAnagram to do the work: split into array of chars, sort, rejoin, compare
or reduce to two objects, tallies of char counts
and confirm that the objects have the same keys and same counts
*/

function charCounts(word) {
  return word.split('').reduce((obj, char) => {
    obj[char] = (obj[char] ?? 0) + 1
    return obj;
  }, new Object());
}

function isAnagram(w1, w2) {
  [w1, w2] = [charCounts(w1), charCounts(w2)];
  return Object.keys(w1).every(char => w1[char] === w2[char]);
}

function anagram(word, list) {
  return list.filter(el => isAnagram(el, word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]