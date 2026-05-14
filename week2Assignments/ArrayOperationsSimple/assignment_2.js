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

const courses = ["javascript", "react", "node", "mongodb", "express"];
//1
let r4=courses.filter(elements=>elements.length>5)
console.log(r4)
//2
let r5=courses.map(elements=>elements.toUpperCase())
console.log(r5)
//4
let r6=courses.find(elements=>elements=="react")
console.log(r6)
//5
let r7=courses.findIndex(elements=>elements=="node")
console.log(r7)