// singleton
const tinderUser = new Object() // OP= {}

//literals
//const tinderUser = {} // OP= {}

tinderUser.id = '01'
tinderUser.name = "Harshwardhan"
tinderUser.age = 22

console.log(Object.keys(tinderUser)); // Op = [ 'id', 'name', 'age' ]
console.log(Object.values(tinderUser)); // OP= [ '01', 'Harshwardhan', 22 ]
console.log(tinderUser.hasOwnProperty("email")); // OP = false

//console.log(tinderUser);

const RealUSer ={
    email : "harsh@gmail.com",
    fullName : {
        UserFullName : {
            FirstName : "Harsh",
            LasttName : "Shinde"
        }
    }
}

//console.log(RealUSer.fullName.UserFullName.FirstName); // OP = Harsh
//console.log(RealUSer.fullName); // OP = { UserFullName: { FirstName: 'Harsh', LasttName: 'Shinde' } }

// MERGING TWO OBJECTS
const object1 = { 1: "a", 2: "b", 3: "c"}
const object2 = { 11:"x", 12: "y", 13:"z"}

// const object3 = (object1,object2) 

//const object3 = Object.assign({},object1,object2)
//{ '1': 'a', '2': 'b', '3': 'c', '11': 'x', '12': 'y', '13': 'z' }

const object3 = {...object1 , ...object2}
//{ '1': 'a', '2': 'b', '3': 'c', '11': 'x', '12': 'y', '13': 'z' }
console.log(object3);


//objects in Array 
const NewObject = [
    {
        user : "Ram",
        rollNo : 1
    },

    {
        user : "sham",
        rollNo : 2
    }

]

console.log(NewObject[1].user); // OP = sham



