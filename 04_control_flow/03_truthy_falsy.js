const username = "harsh"

if(username)
{
    console.log("Executed successfully");
}

let email = ''

if(email)
{
    console.log("mail found");
}
else{
    console.log("mail not found");
}
// OP mail not found

// falsy values : 0, -0, 0n, "", '', null, undefined, NaN
// truthy values : "0", 'false',"false", {}, [], function(){}

const name = [0]

if(name.length === 0)
{
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

// OP = Array is not empty


const NewObject = {}

if(Object.keys(NewObject).length === 0)  // here Object.keys this will return keys in object in array format so we just calculate the length of the array
{
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1
val1 = 5 ?? 10  // OP = 5
val1 = null ?? 10  // Op = 10
val1 = null ?? undefined // Op = undefined 
val1 = undefined ?? 5 // OP = 5

//console.log(val1);


// Terniary operator 

// condition ? true : false

const icecreamPrice = 100

icecreamPrice < 100 ? console.log("less than 100") : console.log("greater than 100");