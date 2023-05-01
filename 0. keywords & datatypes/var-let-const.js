/* 
  
---------------------------------------------------------------------------------------------------------------------
|   Keyword     |          Scope             |    Redeclaration & Reassignment     |            Hoisting            |
---------------------------------------------------------------------------------------------------------------------    
|     var       |      Global, Local         |              Yes & Yes              |     Yes, with default value    |
---------------------------------------------------------------------------------------------------------------------
|     let       |   Global, Local, Block     |              No & Yes               |    Yes, without default value  |
---------------------------------------------------------------------------------------------------------------------
|    const      |   Global, Local, Block     |              No & No                |    Yes, without default value  |
---------------------------------------------------------------------------------------------------------------------

*/



/* 

-----------------
  'var' keyword
-----------------

------------------------------------------
The scope of variables declared with 'var'
------------------------------------------

Variables declared with var can have a global or local scope. Global scope is for variables declared outside functions,
while local scope is for variables declared inside functions.

*/


// Let's see some examples, starting from global scope:

var number = 50

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50

print() // 2500

// The number variable has a global scope – it's declared outside functions in the global space – so you can access it everywhere.

// Let's see an example of local scope:

function print() {
  var number = 50
  var square = number * number
  console.log(square)
}

print() // 2500

console.log(number)
// ReferenceError: number is not defined

// Here, we declared the number variable in the function print, so it has a local scope.
// This means that the variable can only be accessed inside that function. 
// Any attempt to access the variable outside the function where it was declared will result in a variable is not defined reference error.


/* 

    -------------------------------------------------------------
    Variables declared with var can be redeclared and reassigned.
    -------------------------------------------------------------

    - If an initial value is not provided, the default value will be undefined

*/

// The var keyword allows for redeclaration. Here's an example:
var number = 50
console.log(number) // 50

var number = 100
console.log(number) // 100

// The var keyword also allows for reassignment. In the code var number = 50, we assigned the 50 value to number.
// We can reassign another value anywhere in the code since it was declared with var. Here's what I mean:

var number = 50
console.log(number) // 50

number = 100
console.log(number) // 100

number = 200
console.log(number) // 200


/*

   ------------------------------------------------------------------------------------
    Variables declared with var are hoisted to the top of their global or local scope, 
    which makes them accessible before the line they are declared.
   ------------------------------------------------------------------------------------

*/

// Here's an example:
console.log(number) // undefined

var number = 50

console.log(number) // 50


// Let's see a local scope example:

function print() {
    var square1 = number * number
    console.log(square1)    //NaN
  
    var number = 50
  
    var square2 = number * number
    console.log(square2)    //2500
  }
  
  print()

/*

In the print function, number has a local scope. Due to hoisting, we can access the number variable before the line of declaration.
As we see in square1, we assign number * number. Since number is hoisted with a default value of undefined, 
square1 will be undefined * undefined which results in NaN.

After the line of declaration with an initial value is executed, number will have a value of 50. So in square2,
number * number will be 50 * 50 which results in 2500.

*/


/* 

-----------------
  'let' keyword
-----------------

------------------------------------------
The scope of variables declared with 'var'
------------------------------------------

Variables declared with let can have a global, local, or block scope. 
Block scope is for variables declared in a block. A block in JavaScript involves opening and closing curly braces:

        {
          // a block
        }

*/


// You can find blocks in if, loop, switch, and a couple of other statements.
// Any variables declared in such blocks with the let keyword will have a block scope.
// Also, you can't access these variables outside the block. Here's an example showing a global, local, and block scope:

let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square) // 2500
  }

  console.log(largerNumber) // 80
  console.log(anotherLargerNumber)  // ReferenceError: anotherLargerNumber is not defined
}

print()

/*
    In this example, we have a global scope variable number and a local scope variable square. There's also block scope variable anotherLargerNumber because it is declared with let in a block.

    largerNumber, on the other hand – though declared in a block – does not have a block scope because it is declared with var. So largerNumber has a local scope as it is declared in the function print.

    We can access number everywhere. We can only access square and largerNumber in the function because they have local scope. But accessing anotherLargerNumber outside the block throws an anotherLargerNumber is not defined error.
*/


/* 

------------------------------------------------------------------------------------------------------------
Just like var, variables declared with let can be reassigned to other values, but they cannot be redeclared.
------------------------------------------------------------------------------------------------------------

*/

let number = 50
console.log(number) // 50

number = 100
console.log(number) // 100
// Here, we reassigned another value 100 after the initial declaration of 50.


// But redeclaring a variable with let will throw an error:

let number = 50
let number = 100 // SyntaxError: Identifier 'number' has already been declared


/* 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Variables declared with let are hoisted to the top of their global, local, or block scope, but their hoisting is a little different from the one with var.

var variables are hoisted with a default value of undefined, which makes them accessible before their line of declaration (as we've seen above).

But, let variables are hoisted without a default initialization. So when you try to access such variables, instead of getting undefined, 
or variable is not defined error, you get cannot access variable before initialization.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/

// Let's see an example:

console.log(number) // ReferenceError: Cannot access 'number' before initialization
let number = 50


/* 

--------------------
  'const' keyword
--------------------

------------------------------------------
The scope of variables declared with 'var'
------------------------------------------

Variables declared with const are similar to let in regards to scope. Such variables can have a global, local, or block scope.

*/

// when you use const the value isn't changeable only for some primitive types like numbers.
// Here is an example:
const number = 50

function print() {
  const square = number * number

  if (number < 60) {
    var largerNumber = 80
    const anotherLargerNumber = 100

    console.log(square) // 2500
  }

  console.log(largerNumber) // 80
  console.log(anotherLargerNumber) // ReferenceError: anotherLargerNumber is not defined
}

print()


// But const doesn't make complex types as arrays or objects immutable.
const y = [1]
y.push(2)
console.log(y) // [1,2]

const obj = {
  name:'Pushpendra',
  height:'5\'10'
};
obj.age = 27;
console.log(obj); // {name: 'Pushpendra', height: "5'10", age: 27}


/* 

---------------------------------------------------------------------------------------------------------------------------------
In this regard, const is different from var and let.
const is used for declaring constant variables – which are variables with values that cannot be changed.
So such variables cannot be redeclared, and neither can they be reassigned to other values. Attempting such would throw an error.
---------------------------------------------------------------------------------------------------------------------------------

*/

// Let's see an example with redeclaration:
const number = 50
const number = 100 // SyntaxError: Identifier 'number' has already been declared


// Now, let's see an example with reassignment:

const number = 50
number = 100 // TypeError: Assignment to constant variable


/*

---------------------------------------------------------------------------------------------------------------------------------------------------
Variables declared with const, just like let, are hoisted to the top of their global, local, or block scope – but without a default initialization.

var variables, as you've seen earlier, are hoisted with a default value of undefined so they can be accessed before declaration without errors. 
Accessing a variable declared with const before the line of declaration will throw a cannot access variable before initialization error.
---------------------------------------------------------------------------------------------------------------------------------------------------

*/

// Let's see an example:

console.log(number) // ReferenceError: Cannot access 'number' before initialization
const number = 50


/*

These factors I've explained, play a role in determining how you declare variables in JavaScript.

- If you never want a variable to change, const is the keyword to use.

- If you want to reassign values:
  # and you want the hoisting behavior, var is the keyword to use
  # if you don't want it, let is the keyword for you

- The hoisting behavior can cause unexpected bugs in your application.
  That's why developers are generally advised to avoid var and stick to let and cost.

*/