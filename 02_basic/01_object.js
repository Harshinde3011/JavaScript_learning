const MySym = Symbol("Key1")

const JsUSer = {
    name : "Harsh",
    "Last LoggIn" : ["today","Monday"],
    age : 23,
    email : "harsh@gmail.com",
    [MySym] : "symbol notation"
}

//console.log(JsUSer);
//{ name: 'Harsh', age: 23, email: 'harsh@gmail.com' }

// console.log(JsUSer.email);
// returns mail

// console.log(JsUSer["email"]);
// returns mail

//console.log(JsUSer["Last LoggIn"]) // [] mandatory we cant access using Jsuser.last LoggIn
//[ 'today', 'Monday' ]

//console.log(typeof JsUSer.MySym); // String, its not string its symbol
// Instead of this (MySym : "symbol notation" ) use this ([MySym] : "symbol notation" )

//console.log(JsUSer[MySym]);
//symbol notation

JsUSer.email = "harsh@chatgpt.com"
// over write previous email

Object.freeze(JsUSer) // lock the object 

JsUSer.age = 22
// it doesnt make any changes in object 

JsUSer.greeting = function(){
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUSer.greeting());