// ======================= OBJECT DESTRUCTURING =================
let  course = {
    courseId : 1,
    courseName : "JavaScript",
    CourseInstructor : "ChaiOrCode"
}

const {CourseInstructor : CourseI , courseId} = course
console.table([courseId , CourseI])

//  JSON
// {
//     "name" : "Krishnakant",
//     "age" : 22
// }

// [
//     {},
//     {},
//     {},
// ]