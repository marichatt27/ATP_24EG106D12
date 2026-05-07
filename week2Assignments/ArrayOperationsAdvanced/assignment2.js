// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1
let r1=students.filter(element=>element.marks>=40)
console.log(r1)
//2
let r2=students.map(student=>{
        if (student.marks >= 90) grade = "A";
        else if (student.marks >= 75) grade = "B";
        else if (student.marks >= 60) grade = "C";
        else grade = "D";
    return {
    id: student.id,
    name: student.name,
    marks: student.marks,
    grade: grade
  }
}
)
console.log(r2)
//3
let sum=students.reduce((acc,ele)=>acc+ele.marks,0)
let avg=sum/students.length
console.log(avg)
//4
let r3=students.find(element=>element.marks==92)
console.log(r3)
//5
let r4=students.findIndex(element=>element.name=='Kiran')
console.log(r4)