// Sorting - arrangement of values/elements in ascending or descending order
// sort() is the javascript method to sort elements...

let products = ["Apple", "Orange", "Banana", "Kiwi"];
products.sort();
console.log(products);

/* to sort an array in descending order there is a callback fn() passed to sort() method
which we refer to as compare function */

// compare function returns 3 type of values i.e, [less than 0 (-1), more than 0 (1) and equal (0)]
// if compare fn() return -1 sort() will arrange "a before b"...

products.sort(function (a, b) {        //compare function(a, b) anonymous(no-name)..
    // console.log(a, b);
    if (a < b) { return 1 }
    if (a > b) { return -1 }
    if (a == b) { return 0 }
});
console.log(products);

// if we apply normal sort() on numeric array it will compare for unicode string value and will not sort elements as expected...
let num = [10, 50, 25, 12, 5, 30];
num.sort((a, b) => {
    if (a < b) { return -1 }
    if (a > b) { return 1 }
    if (a == b) { return 0 }
});
console.log(num);

// Que 1: What will be the output in case an array has "undefined" while sorting the values?
/* Ans : "undefined" values are never sorted, sort() method shifts all the "undefined" values to the end
 and sorts rest of the values */

let fruits = ["apple", "banana", undefined, "grapes", "orange"];
console.log(fruits.sort());

// Que 2: How will you sort an object literal?
const employees = [
    { eno: 1001, salary: 30000 },
    { eno: 1002, salary: 72000 },
    { eno: 1003, salary: 56000 },
    { eno: 1004, salary: 46000 }
];

employees.sort((a, b) => {
    if (a.salary < b.salary) { return -1 }
    if (a.salary > b.salary) { return 1 }
    if (a.salary == b.salary) { return 0 }
});
console.log(employees);