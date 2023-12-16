// reduce, it provide basically 4 argumnets Accumalator, Index, Value, Array
//Calls the specified callback function for all the elements in an array. The return value of the 
//callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


const Numbers = [1,2,3,4,5,6,7]

let SumOfNum = Numbers.reduce(function (sum,num){
    return sum + num
}, 0)

// using Arrow function

// let SumOfNum = Numbers.reduce( (sum,num) => {
//     return sum + num
// }, 0)

console.log(SumOfNum);
// 28, here sum acts as Accumalator


const ShoppingCart = [
    {
        Product : 'Watch',
        price : 2800
    },
    {
        Product : 'TV',
        price : 10800
    },
    {
        Product : 'Fridge',
        price : 12000
    },
    {
        Product : 'Iron',
        price : 500
    },
]

// I want to calculate the sum of all prices 

const TotalPrice = ShoppingCart.reduce( (sum, product) => {

    console.log(`value ${sum} + price ${product.price} and total is : ${sum + product.price}`);
    return sum + product.price
}, 0 )

console.log(TotalPrice);
// 26100 