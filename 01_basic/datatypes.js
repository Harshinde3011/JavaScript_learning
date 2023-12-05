// primitive 7 types

// string, number, boolen, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLogged = false
const outside = null
let tempreture;

console.log(typeof scoreValue);
console.log(typeof isLogged);
console.log(typeof outside);
console.log(typeof tempreture);

console.log("symbol used to define unique");
const id = Symbol('123')
const NewId = Symbol('123')

console.log(id === NewId);

// non primitive 
// array, function, object


console.log("non primitive datatypes");


const hero = ["shaktiman","raghu","ram"];
console.log(hero);

console.log(typeof hero);

const myFunction = function () {
    console.log("hellow world");
}

console.log(typeof myFunction);

let myObj = {
    name : "harsh",
    age : 23,
}

console.log(typeof myObj);
