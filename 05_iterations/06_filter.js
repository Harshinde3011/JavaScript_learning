// in for each loop, it cant return the output like :-

const MyLang = ['Js','Cpp','C','py']

MyLang.forEach( (lang) => {
    // console.log(lang);
     return lang                   // OP here it wont written anything
});

// lets take another exampple 

const SumArray = [2,3]

SumArray.forEach( (item) => {
//    console.log(item);   OP = 2 3
      return item           // nothing return 
});


// Use Of Filter, it can return the output 

const NewArray = [1,2,3,4,5,6,7,8,9,10]

let PrintArray = NewArray.filter( (num) => {
    return num > 4                       // condition apply
})

console.log(PrintArray);
// [ 5, 6, 7, 8, 9, 10 ]


// Condition using foreach 

let NewArray2 = []

NewArray.forEach( (num) => {
    if(num > 4){
        NewArray2.push(num)
    }
})

console.log(NewArray2);
//  [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const Publish = books.filter( (bk) => {
    return bk.publish > 2000
} )

console.log(Publish);

// {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }


const bookName = books.filter( (bks) => {
     return bks.genre == 'Science'         
} )


console.log(bookName);
//


let LatestBook = books.filter( (book) => {
    
    return book.genre == 'History' && book.edition == 2007
    
 } ) 

//console.log(LatestBook);
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
// ]


books.forEach( (book) => {
    if (book.genre == 'History' && book.edition == 2007) {
        console.log(book.title);
    }
});

// Book Three