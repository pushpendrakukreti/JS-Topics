// Template string/literal is introduced in ES6, a newer way to declare string variable in JS
// It allows you to display the expression inside the backtick (`) itself
/* 
    One more advantage of Template Literal is it helps you to store the format as it is then
    escape sequence is not required for special characters/spaces/new lines...
*/

let num = 90;   // expression
let str = `Value of num is ${num}`;
console.log(str);

let strNew = `This is first line.....
    second line.....
                    third line!!!`;
console.log(strNew);