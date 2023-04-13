// Javascript does not have a single character data type like any other programming language C, C++, etc...
// String is a separate data type but that can be used for single & multiple characters...

/* 
    To declare a variable as string you can use :- 
    1. "" - double quotes 
    2. '' - single quotes 
    3. `` - backticks   // new feature in ES6 i.e, Template literal/string...
    
    4. using String class, e.g,
       let str = new String("Hello World!!");
       Here, str becomes and object instead of primitive datatype...

 ***Note : Escape sequence (\) which instructs that this is not the end of the quote...
*/

let s1 = "I am not new to JavaScript!";
let s2 = "I'm not new to JavaScript!";
let s3 = 'I "am not new to JavaScript!';
let s4 = 'I\'m not new to JavaScript!';
let s5 = "I\'m not new to JavaScript!";

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

/*
            -------------------------
            Valid JS escape sequences
            -------------------------
    \b -> backspace        ,       \v -> vertical tab
    \f -> form feed        ,       \u -> unicode (expects hexadecimal value like \u0001, \u{1F601}, etc)
    \n -> new line         ,       \' -> ' (1 single quote)
    \r -> carriage return  ,       \" -> " (1 double quote)
    \t -> horizontal tab   ,       \\ -> \ (1 backslash)
    
    NOTE : for unicode more than 4 digit hexadecimal number, we have to use curly brackets 
           e.g, \u{1F601}, \u{1F64F}...
*/

let esc1 = "\n\n\n\nI \bam not new to JS!";
let esc2 = "\nI \vam not new to JS!";
let esc3 = "\nI \fam not new to JS!";
let esc4 = "\nI \u{1F601} am not new to JS!";  // unicode value of 1F601 is 😁
let esc5 = "\nI \\am not new to JS!";
let esc6 = "\nI am \rnot new to JS!";   //only print text after \r i.e, "not new to JS!"
let esc7 = "\nI \tam not new to JS!";

console.log(esc1);
console.log(esc2);
console.log(esc3);
console.log(esc4);
console.log(esc5);
console.log(esc6);
console.log(esc7);