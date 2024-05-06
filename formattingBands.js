"use strict";

/*
The band countries are wrong: all the bands should have 'Canada' as the country.
The band name should have all words capitalized.
Remove all dots from the band names.

Make all changes in one pass.
Not clear from prompt, but assuming this should be an array of new objects rather than mutating original.
So clearly this is a transformation: apply a method like formatBand to each object

formatBand:
create a new object
object.name = argued object name with no periods, capitalized
object.country = 'Canada'
object.active = argued object.active
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function formatBand(band){
  return {
    name: band.name.replace(/\./g, '').split(' ').map(capitalize).join(' '),
    country: 'Canada',
    active: band.active,
  };
}

function processBands(data) {
  return bands.map(formatBand)
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]