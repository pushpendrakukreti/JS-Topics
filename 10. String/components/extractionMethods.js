// Extraction methods are used to extract part of a string, it could be substring or a character...
/* 
    Two categories :- 
    1. String extraction methods :- 
        
        slice() - str.slice(startIndex[,endIndex])    //second parameter is optional
        - It returns the extracted part as a new string, without changing the original string...

        substr() - str.substr(startIndex[,noOfCharacters])    //second parameter is optional
        - It is similar to slice(), except it's optional parameter is no. of characters not index...

        substring() - str.substring(startIndex[,endIndex])    //second parameter is optional
        - It is similar to slice(), except it does not allow negative values as parameter...

        **NOTE : endIndex is not the end, it reads the previous character i.e., (endIndex-1)th index...

    2. Character extraction methods :-

        charAt() - returns character

        charCodeAt() - returns integer unicode value between 0 and 65535
*/

let str = "First Second Third Fourth";
console.log(str.slice(10));     // nd Third Fourth
console.log(str.slice(-10));    // ird Fourth

console.log(str.slice(10, 15));    // nd Th
// in above example, second parameter 15 is index number...

console.log(str.substr(10, 15));    // nd Third Fourth
// in above example, second parameter is no. of character...

console.log(str.substring(10, 15));    // nd Th
console.log(str.substring(-10));    // will return whole string
// in above example, if negative value is passed it will return whole string as output...

console.log(str.charAt(3)); // character at index 3 is 's'
console.log(str.charAt());  // by default 0th index, and value will be F
console.log(str.charCodeAt(3)); // will return unicode value of 's' i.e., 115
console.log(str.charCodeAt()); // will return unicode value of 'F' i.e., 70