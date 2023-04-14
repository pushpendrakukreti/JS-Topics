// In this section we will go through a few date related "set" and "get" methods...

let dt = new Date();

console.log(dt); // full date and time with timezone...
console.log(dt.getFullYear());
console.log(dt.getMonth() + 1);  // months in JS are indexed from 0-"January" to 11-"December"...
console.log(dt.getDate());
console.log(dt.getDay());

/*
    getUTC methods like :-
    1. getUTCYear()
    2. getUTCMonth()
*/

// Syntax - date.setFullYear(Year,[month],[day])
console.log(dt.setFullYear(2021));  // returns millisecond value
console.log(dt.setMonth(10));  // returns millisecond value
console.log(dt.setDate(11));  // returns millisecond value

// Date.parse() - it parses a string of date and returns milliseconds
// Syntax : Date.parse("dateString") or new Date("dateString");
console.log(Date.parse("2020-07-25"));


// Get a character month...
const date = new Date();
let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];

const month = date.toLocaleString('default', { month: 'long' });    //using toLocaleString()
console.log(month);

console.log(arrMonths[date.getMonth()]);    // date.getMonth() => 4 i.e., April in arrMonths...


// Find the date before 50 days of the given date
let dt50 = new Date();
dt50.setDate(dt50.getDate() - 50);
console.log(dt50);


// What will be the output if you add 35 as date in Date() constructor?
let dt35 = new Date(2020, 07, 35);  //here date is given as 35 which will move to next month
console.log(dt35);  // autocorrection feature of date object will validate the date automatically even if it is leap year...
