const arr = ["One", "Two", "Three", "Two", "Five", "Six", "Two", "Eight"];

// indexOf() - if no search element in array it will return -1, otherwise it will return index of first searched element
// it starts searching from 0th index of an array
console.log(arr.indexOf("Two", 3));    // 3
console.log(arr.indexOf("two"));    // -1, because its case sensitive

// lastIndexOf() - everything is same except, it starts searching from [arr.length-1]th index of an array
console.log(arr.lastIndexOf("Two", 5));    // 3


// includes() - similar to indexOf() but it returns boolean value i.e., true/false
console.log(arr.includes("Two", 5));    // true
console.log(arr.includes("Two", 7));    // false

// Syntax - arr.indexOf(searchElement,[startingIndex])  ----- [startingIndex] is the index from where you want to start searching in array...
// NOTE : these search methods are case sensitive ex. {Array arr = ["One","Two","Three"]} ... arr.indexOf("two") will return -1.

let salary = [2300, 5000, 7000, 6500, 1200, 7800];
// find() - conditional searching but returns only one/first value at a time...
// findIndex() returns index of first searched record...
// In both above cases if condition not satisfy, it will return - undefined
const rVal = salary.find((element, index, arr, thisArg) => {
    return element > 3000;
});
console.log(rVal);

// filter() - conditional searching and returns a new array of elements that satisfies the condition...
// In case condition not satify it will return a null array i.e., []
const res = salary.filter((element) => {
    return element > 3000;
});
console.log(res);