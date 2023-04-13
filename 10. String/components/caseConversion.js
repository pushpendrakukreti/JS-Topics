// Case conversions helps when you are comparing strings...
/*
    There are two methods :-
    1. str.toLowerCase()
    2. str.toUpperCase()
*/

let str = "Test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str === "test");    // false
console.log(str.toLowerCase() === "test");    // true


/* 
    There is one more method - replace() which is used to replace 
    the character or substring, but also returns the new string only...
    
    It can take a regular expression or a substring...
*/

let strRep = "Test23";
console.log(strRep.replace("23", "!!"));

// Que 1 : Get a character from the user & check whether it is a vowel or consonant.
const prompt = require("prompt-sync")({ sigint: true });    //npm install prompt-sync (node module for server side user input)
let inputChar;

function checkChar() {
    inputChar = prompt("Enter a character : ");

    if (['a', 'e', 'i', 'o', 'u'].indexOf(inputChar.toLowerCase()) >= 0) {
        console.log(`${inputChar} is a vowel!`);
    }
    else if (inputChar.length <= 0) {
        console.log("Invalid Input, Try again!!");
        checkChar();
    }
    else {
        console.log(`${inputChar} is a consonant!`);
    }
}

checkChar();