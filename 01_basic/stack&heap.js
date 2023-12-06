// in js there are two types of datatypes 1. primitive and 2. non-primitive
//primitive datatypes always stored in stack memory  (Call By Value)
//non-primitive datatypes always stored in Heap memory  (Call By Reference)

// in callByVlaue we just send copy of our data not actual value so changes doesnot occur in original value 
// vice versa in callByReference, here we send actual value to changes occur in orginal value 

// CallByvalue

let name = "harsha"

let AnotherName = name

AnotherName = "Shinde"

console.log(name);
console.log(AnotherName); 

// CallByReference  (Object,function,array)

let ObjOne ={
     email: "harsh@gmail.com",
     age: '23',
}

let AnotherObj = ObjOne

AnotherObj.email = "shinde@gmail.com"
AnotherObj.age = 56

console.log(ObjOne);
console.log(AnotherObj);

// Array

let names = ["harsh", "raj", "siddhu"]

let NewNames = names

NewNames[0] = "Pandu"

console.log(names);
console.log(NewNames);