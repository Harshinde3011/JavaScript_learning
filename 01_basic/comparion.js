// console.log(2 > 1);
// console.log("02" > 1); here conversion takes place string to number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that comparion == and >< >= <= wprks differently 
// comparion treated null as 0 thats why in lin 6 result is true 

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === strict check

console.log("02" === 2);