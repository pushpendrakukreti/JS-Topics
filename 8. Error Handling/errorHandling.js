try {
    let a = 10;
    console.log(`Value of A is ${a}`);
    letb = 50;
    console.log(`Value of B is ${b}`); //ReferenceError: b is not defined
}
catch (err) {
    // console.log("Error Found!");
    // console.log(err.name);
    // console.log(err.message);
    // console.log(err.stack);
}

/*----- throw operator : used to provide customized error -----*/

let a = 8;
let ageErr = new Error("Invalid Age !!");   //instead of creating the ageErr object, we can use throw statement to generate error
try {
    if (a < 18) {
        // throw ageErr;
        throw new TypeError("Invalid Age..");
    }
    else {
        console.log("Valid Age!");
    }
}
catch (err) {
    console.log(err.name);  //for TypeError() i.e. a javascript error has name, message, stack...
    console.log(err.message);
}