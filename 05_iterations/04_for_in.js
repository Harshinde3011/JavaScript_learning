// for in loop for object

// for (const iterator of object) {
    
// }


let Myobject = {
    game1 : 'COD',
    game2 : 'BGMI',
    game3 : 'valo'
}

// for (const games of Myobject) {
//     console.log(games);
// }
// it will not execute, for of not for object



// for in for object

for (const key in Myobject) {
    console.log(key);
}
// OP = game1 game2 game3

for (const key in Myobject) {
    console.log(`key is ${key} and value is ${Myobject[key]}`);
}
// op = key is game1 and value is COD
// key is game2 and value is BGMI
// key is game3 and value is valo

// for in for array

const MyArray = ['harsh','ram','raj','sita']

for (const key in MyArray) {
    console.log(key);
}
//OP = 0 1 2 3 

for (const key in MyArray) {
    console.log(MyArray[key]);
}
//OP = harsh ram raj sita

// for in for map

const map1 = new Map()

map1.set('JS','JavaScript')
map1.set('OOp','Object Oriented')
map1.set('C++','C P P')

for (const key in map1) {
    console.log(map1[key]);
}
//OP not executed use for of