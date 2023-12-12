const Arra1 = ["harsh","Raj","Ram"]
const Arra2 = ["Pandu","sita","jack"]

// PUSH 
//Arra1.push(Arra2)
//console.log(Arra1);
//console.log(Arra1[3][2]);

// CONCAT
let NewArray = Arra1.concat(Arra2)
console.log(NewArray);

//Spread 
let Another_Array = [...Arra1,...Arra2]
console.log(Another_Array);

//isArray() Method
let name = "Harsh"
console.log(Array.isArray(name));

//from()
let OneArray = "harsh Shinde"
console.log(Array.from(OneArray));

//of()
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));
