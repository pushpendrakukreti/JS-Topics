// The Date() object is used to deal with both date and time
/*
    There are four ways to create a date object:-
    1. Date() - returns the current date and time with the local timezone - 
       Syntax : 'new Date()'
                'new Date(year, month, day, hours, minutes, seconds, milliseconds)'
                'new Date(milliseconds)'   - Date() in javascript is kind of a millisecond value
                'new Date("string")'    -   string => "2020-08-23T12:32:00Z"
    2. 
*/

const dt = new Date();
console.log(dt);

console.log(new Date());
console.log(new Date(2020,8,29,14,20,45,2));    // for month parameter it takes index type value, e.g, month = 9 (i.e. 8th index => September)
console.log(new Date(2020,7));    // if date is not passed, it will fetch first date of that month

console.log(new Date(2020));    // if only one parameter is passed it will consider it as milliseconds, month parameter cannot be avoided...
console.log(new Date(0));   // in JS this millisecond count value starts from 1st January, 1970...

console.log(new Date().getTime());  // gets millisecond value for current datetime...
console.log(new Date(1681463629439));   // 1681463629439 is millisecond value for current date and time...

console.log(new Date("2020-08-23T12:30:00Z"));   // if you do not use T or Z, the results may vary from browser to browser...