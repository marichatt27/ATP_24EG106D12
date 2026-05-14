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

// Daily temperature data
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. Filter temperatures above 35
let highTemperatures = temperatures.filter(
  temp => temp > 35
);

console.log(highTemperatures);

// 2. Convert Celsius to Fahrenheit
let fahrenheitTemperatures = temperatures.map(
  temp => (temp * 1.8) + 32
);

console.log(fahrenheitTemperatures);

// 3. Calculate average temperature
let totalTemperature = temperatures.reduce(
  (acc, temp) => acc + temp,
  0
);

let averageTemperature =
  totalTemperature / temperatures.length;

console.log(averageTemperature);

// 4. Find first temperature above 40
let firstAbove40 = temperatures.find(
  temp => temp > 40
);

console.log(firstAbove40);

// 5. Find index of temperature 28
let indexOf28 = temperatures.findIndex(
  temp => temp == 28
);

console.log(indexOf28);