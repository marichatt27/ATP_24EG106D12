// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


// Shopping cart data
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. Filter only products that are in stock
let r1 = cart.filter(elements => elements.inStock);
console.log(r1);

// 2. Create new array with product name and total price
let r2 = cart.map(element => {
  return {
    name: element.name,
    total: element.price * element.quantity
  };
});
console.log(r2);

// 3. Calculate grand total of cart
let r3 = cart.reduce((acc, ele) => acc + ele.price * ele.quantity, 0);
console.log(r3);

// 4. Find details of Mouse product
let r4 = cart.find(element => element.name == 'Mouse');
console.log(r4);

// 5. Find index position of Keyboard
let r5 = cart.findIndex(element => element.name == 'Keyboard');
console.log(r5);