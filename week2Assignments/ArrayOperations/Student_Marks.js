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

// Student marks data
const marks = [78, 92, 35, 88, 40, 67];

// 1. Filter passing marks (>= 40)
let passedMarks = marks.filter(
  mark => mark >= 40
);

console.log(passedMarks);

// 2. Add 5 grace marks to each student
let updatedMarks = marks.map(
  mark => mark + 5
);

console.log(updatedMarks);

// 3. Find highest mark using reduce()
let highestMark = marks.reduce(
  (acc, mark) => acc > mark ? acc : mark
);

console.log(highestMark);

// 4. Find first mark below 40
let failedMark = marks.find(
  mark => mark < 40
);

console.log(failedMark);

// 5. Find index of mark 92
let indexOf92 = marks.findIndex(
  mark => mark == 92
);

console.log(indexOf92);