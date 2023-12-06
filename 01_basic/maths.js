// Math library is by default in js

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2)); // very presize .1 means it will show 5
console.log(Math.floor(4.7)); // lower 
console.log(Math.min(45,40,33,55));
console.log(Math.max(45,40,30,55));

console.log(Math.random()); // always gives number to 0 and 1
console.log(Math.floor(Math.random())); // value get 0 to avoid this
console.log(Math.random()*10 + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);

// to get random value in between 10 to 20


