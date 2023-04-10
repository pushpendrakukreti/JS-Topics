/* 
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
    In other words, a closure gives you access to an outer function's scope from an inner function.
*/

//Create a counter function which has increment and getValue functionality

/*----Global Execution Context----*/
const privateCounter = () => {
    // Execution Context(privateCounter())
    let count = 0;

    return {
        increment: (val = 1) => {
        // Execution Context(increment())
            count += val;
        },
        getValue: () => {
        // Execution Context(getValue())
            return count;
        },
    };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
/*-----------------------------------*/

/*-----------------------------------*/
const privateSecret = () => {
    const secret = "foo";

    return () => secret;
};
const getSecret = privateSecret();
console.log(getSecret());
/*-----------------------------------*/