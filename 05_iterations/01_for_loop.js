// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {
      const element = i;
//    console.log(element);
    
}

for (let i = 1; i < 10; i++) {
    const element = i;

    if (i == 5) {
//        console.log("5 is best number", element);
    }
//    console.log(element);
    
}


// continue 

let MyArray = ['harsh','ram','raj','sita','krishna']

// for(let i = 0; i < MyArray.length ; i++)
// {
//     if(i == 3){
//        console.log("Sita is here go ahead");
//         continue;
//     }
//    console.log(MyArray[i]);
// }
// OP  
// harsh
// ram
// raj
// Sita is here go ahead
// krishna

// break


for(let i = 0; i < MyArray.length ; i++)
{
    if(i == 3){
        console.log("Sita is here go ahead");
        break
    }
    console.log(MyArray[i]);
}
// OP 
// harsh
// ram
// raj
// Sita is here go ahead

