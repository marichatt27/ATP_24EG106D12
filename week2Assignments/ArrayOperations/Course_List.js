// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

// Course list
const courses = [
  "javascript",
  "react",
  "node",
  "mongodb",
  "express"
];

// 1. Filter courses with name length > 5
let longCourses = courses.filter(
  course => course.length > 5
);

console.log(longCourses);

// 2. Convert course names to uppercase
let upperCaseCourses = courses.map(
  course => course.toUpperCase()
);

console.log(upperCaseCourses);

// 3. Generate single string using reduce()
let courseString = upperCaseCourses.reduce(
  (acc, course) => acc + " | " + course
);

console.log(courseString);

// 4. Find the course "react"
let reactCourse = courses.find(
  course => course == "react"
);

console.log(reactCourse);

// 5. Find index of "node"
let nodeIndex = courses.findIndex(
  course => course == "node"
);

console.log(nodeIndex);