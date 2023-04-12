// Array can store multiple values under one name, in JavaScript we can store any type of values in an array. E.g. var arr = ['abc', 123, true]

let arr = [4, 6, 8];
let arr1 = new Array("Hi", true, 900);  //using Array class

console.log(arr);
console.log(arr1);

console.log(`Length of arr is ${arr.length}`);  //to check number of elements in array
console.log(arr1[0]);  //to get first element of array
console.log(arr1[arr1.length - 1]);  //to get last element of array


// Array of object literal

let arrObjLiteral = [    // Each value of an array is an object literal
    { pCode: 101, pName: 'Apple' },
    { pCode: 102, pName: 'Banana' },
    { pCode: 103, pName: 'Orange' }
];

console.log(arrObjLiteral);
console.log(arrObjLiteral[0]);
console.log(arrObjLiteral[0].pName);

// Traversal - navigate through an array (loop till the end of array)

let arrEcmaScript = ["ES5", "ES6", "ES7", "ES8"];

for (let i = 0; i < arrEcmaScript.length; i++) {     //ordinary way to traverse an array using for loop
    console.log(arrEcmaScript[i]);
}

// In Javascript ES6 onwards we have (for..in and for..of) to loop through an array...
for (let elem in arrEcmaScript) {
    console.log(elem);  //print the index numbers
}

for (let elem of arrEcmaScript) {
    console.log(elem);  //print the actual values
}

// forEach() cannot be stopped in b/w like other looping methods
arrEcmaScript.forEach((elem, idx, arr, thisArg) => {    //this will not work with arrow function
    console.log(`${elem} is at ${idx} index.`);
    // if (idx == 2) {     //SyntaxError: Illegal break statement
    //     break;
    // }
});

console.log(arrEcmaScript[4]);  //undefined