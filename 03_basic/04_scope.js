// Nested functions and scopes 

function one(){
    const user = "Harsh"

    function two(){
        const media = "You_tube"
        console.log(user);
    }

    //console.log(media); //error occur due to scope accessbility 
    two() // OP = Harsh
    
}

one()

// scopes in If

if(true){
    const user = "Harsh"

    if(user === "Harsh")
    {
        const website = " You tube"
        console.log(user + website);
    }
    //console.log(website); // OP ERROR

}

//console.log(user); // OP ERROR user is not defined 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1st method

console.log(Number(4))

function Number(value){
    return value + 1
}

//Addnumber(5) // OP = Cannot access 'Addnumber' before initialization, here we define function using variable 

const Addnumber = function(value){
    return value + 2
}

console.log(Addnumber(5));


