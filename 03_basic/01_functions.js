function name(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

//name / it will not execute code here only refrence is passed 
//name() / it will execute the code

function addTwoNum(number1, number2){
     
    console.log(number1 + number2); 

}

//addTwoNum(3,4) // OP = 7

//let Sum = addTwoNum(3,4)
//console.log("result of two number is ", addTwoNum(3,4)); 
//OP =" 7, result of two number is  undefined ". for storing result in varible we have use return in function

// function addTwoNum(number1, number2){
     
//     return number1 + number2

// }

function WhoLoggedIn(username){

    if(username === undefined){
        console.log("please first enter username");
        return // the code below this line is not executed 
    }
     return `${username} is just looged In`

}

//WhoLoggedIn("Harsh") // OP = it will not run because we just return the Op not printing the OP
console.log(WhoLoggedIn("Harsh"));


