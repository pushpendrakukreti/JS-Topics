// Normal function returns a single value whereas a generator function can return multiple values in phases
// function* is the keyword used to define a generator function
// yield is an operator which pauses the generator, it also helps to receive input & send output
// next() method used to start execution till yield operator, it returns object like {value: Val, done: true/false}
// return() method is used to terminate the generator, it returns {value: Val, done: true(always)}
// throw() method throws an exception at the location of yield which made the last suspension in the generator function

const genFunc = function* () {
    console.log("Hello");
    yield 'yield operator called!';
    console.log("World");
    yield;
    console.log("and Galaxy");
}


const genObj = genFunc();
//1. console.log(genObj); //it returns a generator object i.e. Object [Generator] {}

const obj = genObj.next();  // Hello
console.log(obj);   //{value: 'yield Operator called!!', done: false}
const obj1 = genObj.next(); // World
console.log(obj1);  //{value: undefined, done: false}
const obj2 = genObj.next(); // and Galaxy
console.log(obj2);  //{value: 'yield Operator called!!', done: true}


//2. Generators are iterable
for (let o of genObj) {
    console.log(o);
}


//3. As it is iterable we can use spread operator
const genObjSpread = [...genFunc()];
console.log(genObjSpread);


//4. Generator works best with iterator
let objIterator = {
    start: 10,
    end: 15,
    *[Symbol.iterator]() {
        for (let cnt = this.start; cnt <= this.end; cnt++) {
            yield cnt;
        }
    }
}

// for (var i of objIterator) {
//     console.log(i);
// }

console.log([...objIterator]);


//5. When it comes to recursive funtions or calling one generator function from another the yield* syntax is used
function* gen() {
    console.log("Hi");
}

function* gen1() {
    // const g = gen();
    // g.next();

    yield* gen();
}

const g1 = gen1();
g1.next();


//6. return() method to terminate generator, and can use finally{} to suspend termination
function* genReturn() {
    try {
        yield "One";
        yield "Two";
    }
    // finally {
    //     yield "Finally";
    // }
    catch (err) {
        console.log("Error:" + err);
    }
}

const objReturn = genReturn();
console.log(objReturn.next());
// console.log(objReturn.return("Generator is terminated!")); //generator will get terminate here, but yiel in finally{} will get returned
// console.log(objReturn.next());
console.log(objReturn.throw());