"use strict";

/*
count how many positive words are present
count how many negative words are present
iterate over positive words, testing how many times they match the argued string by generating a regex /\bword\b/i
add the number of matches to a running total
if the number of matches is > 0, , add to the list of positive matching words

same for negative matches
format output:
count of positive words
list of positive words

count of negative words
list of negative words

positive > negative?
*/

/*
Refactor out duplicate behavior for positive and negative words
but we need to keep track of each
so instead write a function that takes the list of words and text and
returns an object with list of matching words and count of matching words
*/


let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let positive = getMatchData(positiveWords, text);
  let negative = getMatchData(negativeWords, text);

  let score = (positive.count - negative.count);
  let overall;

  if (score > 0) {
    overall = 'Positive';
  } else if (score === 0) {
    overall = 'Neutral';
  } else {
    overall = 'Negative';
  }

  console.log(`There are ${positive.count} positive words in the text.`);
  console.log(`Positive sentiments: ${positive.list.join(', ')}\n`);
  console.log(`There are ${negative.count} negative words in the text.`);
  console.log(`Positive sentiments: ${negative.list.join(', ')}\n`);
  console.log(`The sentiment of the text is ${overall}.`);
}

function getMatchData(words, text) {
  let data = { count: 0, list: [], };
  words.forEach(function(word) {
    let matches = countMatches(word, text);
    data.count += matches;
    if (matches > 0) { data.list.push(word) }
  });
  return data;
}

function countMatches(word, text) {
  let pattern = new RegExp(`\\b${word}\\b`, 'gi');
  return (text.match(pattern) ?? []).length
}

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.