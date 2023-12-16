// map 

const MyArray = [1,2,3,4,5,6,7]

let result = MyArray.map( (num) => {
    return num + 10
} )

console.log(result);
// [
//   11, 12, 13, 14,
//   15, 16, 17
// ]


// Chaining means u can use multiple map and filter together

let FinalMap = MyArray
.map( (num) => num * 10 )
.map( (num) => num + 1 )
.filter( (num) => num > 40 )

console.log(FinalMap);

// [ 41, 51, 61, 71 ]