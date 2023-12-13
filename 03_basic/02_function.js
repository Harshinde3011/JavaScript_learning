function CustomersItem(...item){
    return item
}


//it allows indefinite no.of aruments as an array
console.log(CustomersItem("key","soap","broom"));
// [ 'key', 'soap', 'broom' ]

// Passing Objects into function

let user1 = {
    name : "Harsh",
    age : 22
}

let user2 = {
    name : "Marsh",
    age : 23
}

function usersInfo(anyObject){
    return `my name is ${anyObject.name} and Im ${anyObject.age} yrs Old`
}

// 1st way

console.log(usersInfo(user1));
//my name is Harsh and Im 22 yrs Old

console.log(usersInfo(user2));
//my name is Marsh and Im 23 yrs Old

// another Way

console.log(usersInfo({
    name : "ram",
    age : 45
}));
//my name is ram and Im 45 yrs Old


// Passing Array in Function

let NewArray = [20,30,40,50]

function PrintValueFromArray(FetchArray){

    return FetchArray[3]

}

console.log(PrintValueFromArray(NewArray));
// 50

console.log(PrintValueFromArray([100,200,300,400,500]));
// 400