// add, remove, insert, replace elements in an array.
// there are 4 methods to add/remove elements in an array i.e. [push(), unshift()] / [pop(), shift()].

// push() - adds 1 or more elements at the end of an array and returns the new length.
// unshift() - adds 1 or more elements at the beginning of an array and returns the new length.

// pop() - removes last element from an array & returns that removed element.
// shift() - removes first element from an array & returns that removed element.

// splice() - all rounder method, it can add, insert, replace or even remove one or more elements depending upon parameters i.e. passed
// Sytax - arrName.splice(start, [deleteCount[,value1,...,valueN]])
// Note : splice() mutates the array, which is not a good practice in some cases...original object should not be mutated!
// splice() method returns deleted item, if there is nothing to delete it will retur an empty array i.e. []

function arrayOperation() {
    let arr = ["One", "Two", "Three", "Four", "Five"];

    console.log(`
    1. push()
    2. pop()
    3. shift()
    4. unshift()
    5. splice()
    
    0. to Exit...
    `)

    const prompt = require("prompt-sync")({ sigint: true });    //npm install prompt-sync (node module for server side user input)
    const inputVal = prompt("Enter your choice : ");
    let input = "";
    let enterKey = "";

    function commonCall(isArr) {
        isArr && console.log(arr);
        enterKey = prompt("Press ENTER key to continue....");
        arrayOperation();   //recursion for infinite times input from user...
    }

    function defaultCall() {
        console.log("\nInvalid Choice, Choose Again!!");
        commonCall();
    }

    switch (inputVal) {
        case "0":
            break;
        case "1":
            console.log(arr);
            input = prompt("Enter an element to insert in above array : ");
            console.log(`Length of array after adding new element(${input}) : ${arr.push(input)}`);
            commonCall(true);
            break;
        case "2":
            console.log(arr);
            console.log(`Element i.e. removed from array is ${arr.pop()}`);
            commonCall(true);
            break;
        case "3":
            console.log(arr);
            console.log(`Element i.e. removed from array is ${arr.shift()}`);
            commonCall(true);
            break;
        case "4":
            console.log(arr);
            input = prompt("Enter an element to insert in above array : ");
            console.log(`Length of array after adding new element(${input}) : ${arr.unshift(input)}`);
            commonCall(true);
            break;
        case "5":
            function fnSplice() {
                console.log(`
    1. Remove elements on and after particular index.
    2. Remove elements till particular index.
    3. Remove and Add elements at particular index.

    0. main Menu....
            `);

                const inputSplice = prompt("Enter your choice : ");
                let inputTill = "";
                let inputReplace = "";

                switch (inputSplice) {
                    case "0":
                        arrayOperation();
                    case "1":
                        console.log(arr);
                        input = prompt("Enter an index after which you want to delete all elements : ");
                        console.log(`Removed elements from array where index >= ${input} : ${arr.splice(input)}`);
                        commonCall(true);
                        break;
                    case "2":
                        console.log(arr);
                        input = prompt("Enter starting index from where deletion has to start : ");
                        inputTill = prompt("Enter length till which you want to delete elements : ");
                        console.log(`Removed elements from array : ${arr.splice(input, inputTill)}`);
                        commonCall(true);
                        break;
                    case "3":
                        console.log(arr);
                        input = prompt("Enter starting index from where deletion has to start : ");
                        inputTill = prompt("Enter length till which you want to delete elements : ");
                        inputReplace = prompt(`Enter element you want to insert at index (${input}) : `);
                        console.log(`Removed elements from array : ${arr.splice(input, inputTill, inputReplace)}`);
                        commonCall(true);
                        break;
                    case "4":
                        console.log(arr);
                        input = prompt("Enter an index after which you want to delete all elements : ");
                        console.log(`Removed elements from array where index >= ${input} : ${arr.splice(input)}`);
                        commonCall(true);
                        break;
                    default:
                        fnSplice();
                }
            }
            fnSplice();
            break;
        default:
            defaultCall();
    }
}

arrayOperation();