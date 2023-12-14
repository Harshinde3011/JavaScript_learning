// if 

const UserLoggedIn = true 

if(UserLoggedIn){
//    console.log("user is successfully logged In");
}

const value = 200

if(value === 100)
{
//    console.log("value is 100");
}
else{
//    console.log("value is not 100");
}

// <, >, ==, <=, >=, ===, !==

let score = 200

if(score > 100)
{
    let power = "fly"
    console.log(`my power is ${power}`);
}

// console.log(`my power is ${power}`); // OP = error

let balance = 1000

if(balance < 500)
{
    console.log("less than 500");
} 
else if(balance < 900)
{
     console.log("less than 900");
}
else if(balance < 1200)
{
    console.log("less than 1200");
}

// multiple conditions 

const UserLogged = true 
const UserDebitCard = true 
const LoggedWithGoogle = false
const LoggedWithEmail = true

if(UserLogged && UserDebitCard) // both are mandatory 
{
    console.log("User can buy the curse");
}
else
{
    console.log("user cant buy it ");
}


if(LoggedWithGoogle || LoggedWithEmail || 2==3)
{
    console.log("logIn successfully");
}