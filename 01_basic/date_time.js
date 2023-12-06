let Mydate = new Date()
console.log(Mydate);
console.log(Mydate.toString());
console.log(Mydate.toLocaleDateString());
console.log(Mydate.toDateString());
console.log(typeof Mydate);

let MyCreatedDate = new Date(2023, 0, 22)
console.log(MyCreatedDate);
console.log(MyCreatedDate.toLocaleString());

let MyNewCreatedDate = new Date("2023-2-25")
console.log(MyNewCreatedDate);
console.log(MyNewCreatedDate.toLocaleDateString());


let Mytimestamp = Date.now()
console.log(Mytimestamp);
console.log(Mytimestamp.valueOf());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay() + 1);


console.log(` today is very special day that is ${Mydate.toLocaleDateString()}`);

