// This keyword in Object

const one = {
    name : "harsh",

    PrintMsg : function()
    {
        price : 999,
        console.log(`my name is : ${this.name} and price is ${this.price}`);
    }
}

// one.PrintMsg() // OP = my name is : harsh and price is 999, "This" works well in objects
//one.name = "sam"
//one.PrintMsg() // OP = my name is : sam and price is undefined

// This keyword in Function

function chai(){
    const name = "Harsh"
    const price = 999

    console.log(`my name is ${name} and price is ${price}`); // we declare this.name in op it shows undefined value 
    console.log(this);
    
}

//chai() // Op = my name is Harsh and price is 999, and some diff values, This keyword cant work in function


console.log(this); // OP = {} empty, global variable 

// +++++++++++++++++++++++++++++++++++++++++++++ARROW Function++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//normal function
const NewFuncton = function(num1,num2)
{
    return num1 + num2
}

console.log(NewFuncton(3,5));  // OP = 8

// arrow func defination, no need to write function

const ArrowFunct = (num1,num2) => {
        return num1 * num2          // explicit return
}

console.log(ArrowFunct(2,9));  // OP = 18

const print = (num1,num2) => num2 * num2  // implicite return 

print(4,5)  // Op = 20