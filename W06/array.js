// arrays in javascript

let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

//display the first course
console.log(courses[0]);
console.log(courses[3]);
console.log(courses[courses.length -1]);


// normal for i loop
for(let i = 0; i < courses.length; i++){
    console.log(courses[i]);
}

// array methods/functions

courses.forEach((item) =>{
    console.log(item);
})

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    instructor: "Brother Warner"
}

console.log(course.instructor)

//array of objects

let coursesArrayOfObjects = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD131",
        credits: 2,
        instructor: "Brother Warner"
    },
    {
        name: "Web Fundamentals",
        code: "WDD130",
        credits: 2,
        instructor: "Brother Christensen"
    }
]

// Challenge: Print out the name and code of the secound course in this array

console.log(coursesArrayOfObjects[1].name);

console.log(coursesArrayOfObjects[1].code);

let body = document.querySelector('body');

coursesArrayOfObjects.forEach((course) => {
    //build out an html div with course contents
    let courseDiv = `
        <div>
            <h2>${course.name}</h2>
            <p> Code: ${course.code}</p>
            <p> Credits: ${course.credits}</p>
            <p> Instructor: ${course.instructor}</p>
        </div>
    `;
    //add that div to the body
    body.innerHTML += courseDiv
})