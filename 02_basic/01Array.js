// const Myarr = [0,1,2,3,4,5,true,"Harsh"]
// console.log(Myarr);
// console.log(Myarr[7]);

const MyArr2 = new Array(1,2,3,4,5)
// console.log(MyArr2);

MyArr2.push(7)
MyArr2.push(8)

// console.log(MyArr2);

// MyArr2.pop()
// console.log(MyArr2);

// MyArr2.unshift(11) // use shift to remove 1st element 
// console.log(MyArr2);

// console.log(MyArr2.includes(5));
// console.log(MyArr2.indexOf(7));

// const NewArr = MyArr2.join()
// console.log(NewArr);

// slice , splice 
//MyArr2.shift()

console.log("Slice and Splice concept");

console.log("A" ,MyArr2);
console.log(MyArr2.slice(0,3));
console.log("Result after slice" ,MyArr2);

console.log("B", MyArr2);
console.log(MyArr2.splice(0,3));
console.log("Result after splice", MyArr2);

// splice madhe changes in actual array, manuplites the array  

