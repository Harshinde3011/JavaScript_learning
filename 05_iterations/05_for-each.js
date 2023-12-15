// for each, here we have to give callback function
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

const MyArray = ['JS','C++','C','python','ruby']

// NOrmal function
MyArray.forEach( function  (values){
    console.log(values);
});
//OP = JS C++ C python ruby 


// arrow function
MyArray.forEach( (item) =>{
     console.log(item);
} );


MyArray.forEach(function (item, index, arr) {
    console.log(item, ':', index,':', arr);
});
// JS : 0 : [ 'JS', 'C++', 'C', 'python', 'ruby' ]
// C++ : 1 : [ 'JS', 'C++', 'C', 'python', 'ruby' ]
// C : 2 : [ 'JS', 'C++', 'C', 'python', 'ruby' ]
// python : 3 : [ 'JS', 'C++', 'C', 'python', 'ruby' ]
// ruby : 4 : [ 'JS', 'C++', 'C', 'python', 'ruby' ]


let MyObject = [
    {
        language : 'JavaScript',
        rate : 4
    },

    {
        language : 'C++',
        rate :4.3
    },

    {
        language : 'Ruby',
        rate : 3
    }

]


MyObject.forEach( function  (item){
    console.log(item);
});
// { language: 'JavaScript', rate: 4 }
// { language: 'C++', rate: 4.3 }
// { language: 'Ruby', rate: 3 }

MyObject.forEach( function  (item){
    console.log(item.language);
});
// JavaScript
// C++
// Ruby


MyObject.forEach( function  (item){
    console.log(item.rate);
});
// 4
// 4.3
// 3