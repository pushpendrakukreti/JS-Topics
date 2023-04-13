// Normally properties or methods should be with objects, whereas 'string' is a primitive type...
// JavaScript primitive types - when executed behave like an object

let str = "This is a list of books!";
console.log(str.length);

console.log(str.indexOf("is"));     // 2
console.log(str.lastIndexOf("is"));     // 11

console.log(str.indexOf("is", 5));  // 5
console.log(str.lastIndexOf("is", 4));  // 2

console.log(str.lastIndexOf("is", 1));  // -1

/* 
    indexOf() can have a start position to perform search,
    but it cannot be used for advanced search operations like regex...
    
    search() method can take regular expressions as well,
    but it cannot have a start position to perform search...
*/

console.log(str.search("is"));