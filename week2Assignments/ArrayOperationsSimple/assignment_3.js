// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67];
//1
let c=marks.filter(elements=>elements>=40)
console.log(c)
//2
let c1=marks.map(elements=>elements+5)
console.log(c1)
//3
let c2=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(c2)
//4
let c3=marks.find(elements=>elements<40)
console.log(c3)
//5
let c4=marks.findIndex(elements=>elements==92)
console.log(c4)