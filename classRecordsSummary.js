"use strict";

/*
so to start, we don't care about student ids, we just want to look at exams and scores
we can think of this happening in two passes, building an object as we go:
1. generate individual student scores
2. generate exam information

individual scores: map object of student objects into array of student objects with only their scores

Then map to strings: get average exam data (all exams / 4) and multiply by .65, add to exercises * .35, round, and find corresponding grade (could use a helper here.) Format as a string "81 (C)".

exam information: want to rearrange our data somewhat. for each exam (indices 0-3), get the exam score for each student and hold as an array. so should look like an array of arrays.

then map to an array of objects, applying some kind of getStats method that gives average to one decimal place, minimum, and maximum.
Within getStats, can use reduce for each operation

assign record.exams to this array of objects

Finally, return record object
*/

function generateClassRecordSummary(scores) {
  const record = {};
  record.studentGrades = getStudentGrades(scores);
  record.exams = getAllExamStats(scores);
  return record;
}

function getStudentGrades(scores) {
  scores = Object.keys(scores).map(student => scores[student].scores);
  return scores.map(getGrade);
}

function getGrade({exams, exercises}){
  let examComponent = (exams.reduce(sum) / 4) * 0.65;
  let exerciseComponent = exercises.reduce(sum) * 0.35;
  let grade = Math.round(examComponent + exerciseComponent);
  let letter = letterGrade(grade);
  return `${String(grade)} (${letter})`;
}

function sum(acc, num) {
  return acc + num;
}

function letterGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getAllExamStats(scores) {
  let exams = [null, null, null, null];
  exams = exams.map((el, idx) => getExamScores(scores, idx));
  return exams.map(getStats)
}

function getExamScores(scores, idx) {
  return Object.keys(scores).map(student => scores[student].scores.exams[idx]);
}

function getStats(nums) {
  const result = {};
  result.average = nums.reduce(sum) / nums.length;
  result.minimum = nums.reduce((min, current) => (current < min) ? current : min, Infinity);
  result.maximum = nums.reduce((max, current) => (current > max) ? current : max, -Infinity);
  return result;
}


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }