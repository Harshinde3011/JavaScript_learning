//IIFE = Immediately Invoked Function Execution  fucntion=()()= execution
//It is used to avoid the pollution form the global values or variables 

(function name(name){
    //named IIFE

    console.log(`my name is ${name}`);

})("harsh");

// ";" this plays a very imp role in IIFE we explicitly have to assign it for end current function 

((num1,num2) => {

     console.log(num1+num2);
     
})(3,4)