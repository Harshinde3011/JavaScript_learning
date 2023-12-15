// for of

// ["","",""]
// [{},{},{}]

// for of with Arrays

let MyArray = ['harsh','ram','raj','jac','kala']

for (const item of MyArray) {
//    console.log(item);
}
// OP = harsh ram raj jac kala

const MyString = "Hello Harsh"

for (const characters of MyString) {
//    console.log(characters);
}
//OP = H e l l o  H a r s h


// for of with Map

let map1 = new Map()

map1.set('IN',"India")
map1.set('US',"United State")
map1.set('FR',"France")
map1.set('IN',"Indoneshia")

for (const values of map1) {
    console.log(values);
}
// OP = [ 'IN', 'India' ]
//[ 'US', 'United State' ]
//[ 'FR', 'France' ]


for (const [key,values] of map1) {
     console.log(key,':-',values)
}
//OP= IN :- India
//US :- United State
//FR :- France