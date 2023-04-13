// The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.
// It is a non-mutating method. Generally, the map() method is used to iterate over an array and calling function on every element of the array. 

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


// Example 1: This example uses the array map() method and returns the square of the array element. 

const arr = [2, 5, 6, 3, 8, 9];
const newArr = arr.map((val, index) => `key:${index}, value:${val * val}`);
console.log(newArr)

// Example 2: This example uses the array map() method to concatenate the index number with every character of the name. 

const name = "aryan";
const newStringArr = Array.prototype.map.call(name, (item, idx) => item + idx);
console.log(newStringArr);

//  Example 3: Find length of every element in array

const arrFruits = ["Pineapple", "Banana", "Kiwi", "Mango"];
const newFruitsArr = arrFruits.map(elem => elem.length);
console.log(newFruitsArr);

//  Example 4: Find square root of every element and store in a new array

const arrSqrt = [25, 49, 16, 64, 4, 81];
const sqrtArr = arrSqrt.map(elem => Math.sqrt(elem));
console.log(sqrtArr);

// Example 5: Fetch all the "pName" in separate array

const products = [      // array of objects
    { pCode: 1, pName: "Pushpendra" },
    { pCode: 2, pName: "Aryan" },
    { pCode: 3, pName: "ManGo" },
    { pCode: 4, pName: "PK" }
]

const newProdArr = products.map(elem => elem.pName);     // object literal to array
console.log(newProdArr);