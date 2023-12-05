// const name = "harsh"
// const value = 50

// console.log(name +  value + " working great");

const name = new String('harsh-shinde-computer-science')


// back text 
// console.log(`hi my name is ${name} and my age is ${value}`);

// console.log(name[0]);
console.log(name.__proto__); // we can use prototype 

console.log(name.length);
console.log(name.charAt(2));
console.log(name.indexOf('a'));


console.log(name);

const newString = name.substring(0, 4) 
console.log(newString);


// const anotherString = name.slice(-2,4)
// console.log(anotherString);

const anotherString = "     harsh     "
console.log(anotherString);
console.log(anotherString.trim());

const url = "https://harsh-shinde.com/harsh%20shinde"
console.log(url);

console.log(url.replace('%20', '-'));
console.log(url.includes('shinde'));
console.log(url.includes('parsh'));

console.log(name.split('-'));