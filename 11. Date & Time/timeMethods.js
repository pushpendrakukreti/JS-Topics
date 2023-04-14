// In this section we will go through a few time related "set" and "get" methods...
let dt = new Date();
console.log(dt.getTime());  //returns the milliseconds
console.log(dt.getHours());  //returns value between (0 to 23)
console.log(dt.getMinutes());  //returns value between (0 to 59)
console.log(dt.getSeconds());  //returns value between (0 to 59)
console.log(dt.getMilliseconds());  //returns value between (0 to 999)

console.log(dt.setTime(0));

// Calculate the date difference in days...
let dt1 = new Date(2023, 04, 14);
let dt2 = new Date(2023, 03, 14);

let res = dt1.getTime() - dt2.getTime();
res = (res / 1000) / 3600;    // 3600 is no. of seconds in an hour
console.log(res / 24);  // res => total hours when divided by 24 give exact days...

// How can you change hours or minutes in time?
/*
    setHours() - to change the hours
    setMinutes() - to change the minutes
*/

let ms = dt.setHours(20);
ms = dt.setMinutes(0);
console.log(new Date(ms));