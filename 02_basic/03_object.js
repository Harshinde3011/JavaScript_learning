// Object de-structuring

const Course = {

    email : "harsh@gmail.com",
    Uname : "Harsh Shinde",
    price : 999,
    CourseInstructor : "harsh"

}

//console.log(Course.CourseInstructor);
// so to execute that, we have write "Course.CourseInstructor" again nd again for that we destructure the object

let {CourseInstructor : Instructor} = Course

console.log(Instructor);
// harsh

// APIs are mostly written in JSON fromat 

// {
//     "name" : "harsh",
//     "email" : "harsh@gmail.com",
//     "age" : 22
// }
