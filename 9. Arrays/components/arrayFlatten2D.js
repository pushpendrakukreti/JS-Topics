// Question: How to flatted 2D array?
// Flattening an array means converting multidimensional array i.e, 2D, 3D etc. into a single dimensional array.

// reduce() method is use to flatten an array
// map() and reduce() almost similar except if we want sum of all elements from an array, 
// then it's kind of an aggregate or accumulative operation i.e, the result is combined...

// reduce((accumulator,currentValue, index, array){...do..something...}, init) method callBack has two parameters i.e, 
// "accumulator" - which gathers all the values inside, "currentValue" - each element of an array, 
// "index" - of the currentValue and "array" - which has reference to current array...
// "initialValue" - is the value for accumulator, be default accumulator starts with 0.
// We can also give, {} - that means from the beginning accumulator has become object literal or [] - means the accumulator is an array from beginning...

// reduceRight() - loops array from array.length - 1 till 0th index...

const arr = [2, 4, 6, 8];
const sumArr = arr.reduce((accumulator, current) => {
    return accumulator + current;
});
console.log(`Sum of [${arr.map((elem) => elem)}] : ${sumArr}`);

/* 
        ------Dry run the above code-------

    Accumulator          Current         Result
   0 (first call)          2              2
   2 (second call)         4              6
   6 (third call)          6              12
   12 (fourth call)        8              20

*/

// with accumulator initialization by 10
const initVal = 10;
const sumArrInit = arr.reduce((accumulator, current) => {
    return accumulator + current;
}, initVal);
console.log(`Sum of [${arr.map((elem) => elem)}] with initial value ${initVal} : ${sumArrInit}`);


// find average from elements in an array
const avgElement = arr.reduce((acc, curr, idx, arrArg) => {
    acc += curr;
    if (idx === arrArg.length - 1) {
        return acc / arrArg.length;
    }
    return acc;
});

console.log(avgElement);


// Que 1: How will you flatten an array ?
const arr2D = [
    [2, 4],
    [6, 11],
    [23, 8]
];

const fArr = arr2D.reduce((acc, curr) => acc.concat(curr), []);     // [] makes sure that accumulator is an array from the beginning...
console.log(fArr);


// Que 2: Get sum of a key field of an object literal
const employees = [
    { eno: 1001, salary: 30000 },
    { eno: 1002, salary: 72000 },
    { eno: 1003, salary: 56000 },
    { eno: 1004, salary: 46000 }
];

const totalSalary = employees.reduce((acc, curr) => {
    return acc + curr.salary;
}, 0);

// Note - accumulator must be initialised as 0 to identify the numeric operations only and not the first object i.e,  {eno: 1001, salary: 30000 }...

console.log(`Total Salary = ${totalSalary.toLocaleString('en-IN',
    {
        style: 'currency',
        currency: 'INR'
    }
)}`);