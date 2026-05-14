// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//1
let r=temperatures.filter(elements=>elements>35)
console.log(r)
//2
let r1=temperatures.map(elements=>((elements*1.8)+32))
console.log(r1)
//3
const avg=temperatures.reduce((accumulator,element)=>accumulator+element)
console.log(avg/temperatures.length)
//4
let r2=temperatures.find(elements=>elements>40)
console.log(r2)
//5
let r3= temperatures.findIndex(elements=>elements==28)
console.log(r3)