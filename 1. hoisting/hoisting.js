// Hoisting means the declaration of variables and functions bubble up to the top
// Hoisting is when you use a variable before you define it.

//console.log(foo);  //foo is not defined
//foo=1;  //declaration with no type

//console.log(foo);  //undefined
//var foo = 2;  //it will bubble up to top

foo = 3; //foo will be 3
console.log(foo);  //3
var foo; //it will bubble up to top

func();   //foo called!!
function func(){      //this function will bubble up to top
    console.log('func called!');
}

//let and const will not bubble up and work for same line when declared