let a =10
const b =20
var c =30

// let and const are block scope, and var is global scope

if(true){
    let a = 100
    const b = 200
    var c = 300

    console.log("INNER :", a);
    console.log("INNER :", b);
    console.log("INNER C :", c);
}

console.log("OUTER A :",a);
console.log("OUTER B :",b);
console.log("OUTER C :",c); // here value of C should have to 30 but it cames 300 due to global scope