"use strict";

/*
split string into array around spaces or dashes
map array to uppercased first letter of each str
rejoin
*/

function acronym(string) {
  return string.split(/[ \-]/).map(word => word[0].toUpperCase()).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"