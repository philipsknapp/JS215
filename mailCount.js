"use strict";

/*
can split into emails, then fields per email
or use capture groups
or both
get the number of matches
get the date and convert to date object
  - "\nDate: 07-27-2016" is current format
get the earliest and latest dates (need to write a compare function if
not already provided - I think I can convert to ms if nothing else)
*/


function mailCount(emailData) {
  let emailDates = emailData.split('##||##').map(email => email.split('#/#')[2]);
  emailDates = emailDates.map(date => convertToDate(date));
  emailDates.sort((a, b) => a.valueOf() - b.valueOf());

  let earliest = emailDates[0];
  let latest = emailDates[emailDates.length - 1];

  console.log(`Count of Email: ${emailDates.length}`);
  console.log(`Date Range: ${earliest.toDateString()} - ${latest.toDateString()}`);
}

function convertToDate(str) {
  let dateNumber = str.split(' ')[1];
  let [month, day, year] = dateNumber.split('-');
  return new Date(year, month - 1, day);
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016