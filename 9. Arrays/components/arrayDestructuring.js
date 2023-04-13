/* Destructuring is a concept of breaking data structure, like array or object literal into data pieces
or in other words individual elements */

let arr = [80, 90, 93, 26];
// Normal way of destructuring
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];

console.log(`[${a + "," + b + "," + c + "," + d}]`);

// Proper way of destructuring in ES6
let [val1, val2, val3, val4] = arr;  // if you see square brackets in left side its not an array, its destructuring...
console.log(a, b, c, d);

function retArr() {     //return array from a function...
    return arr;
}

let [item1, item2, item3, item4] = retArr();  // passing function that is returning array will give same result...
console.log(item1, item2, item3, item4);

// how to avoid assignment of any element from array..
const arrAvoid = [10, 20, 21, 30, 40, 50, 54];
const [v1, v2, , v3, v4, v5,] = arrAvoid;
console.log(v1, v2, v3, v4, v5);

// swapping values of two variables...
let s1 = 100, s2 = 200;
[s1, s2] = [s2, s1];
console.log(s1, s2);

// Rest operator(...) with destructuring...
let arrRest = [4, 5, 6];
[r1, ...r2] = arrRest;  // r2 will become new array containing [5, 6]
console.log(r1, r2);

// Default value implementation in destructuring...
// if no element is present at exact index, also no default value set manually then it will return 'undefined'...
let arrDef = [1, 2, 3];
let arrDef_1 = [1, 2];
let [def1, def2, def3 = 0] = arrDef;
let [def11, def22, def33 = 0] = arrDef_1;

console.log(def1, def2, def3);  // will return def3 = 3, default value 0 will override by '3'...
console.log(def11, def22, def33);   // will return def33 = 0, because there is no third element in arrDef_1...