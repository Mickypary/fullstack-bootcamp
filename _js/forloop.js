let candies = 10;

for (let i = 1; i <= candies; i++) {
  console.log(`Candy ${i}`);
}

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(`Fruit ${i + 1}: ${fruits[i]}`);
// }

// Nested Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Element at [${row}][${col}]: ${matrix[row][col]}`);
  }
}

// let totalSum;
// let numberDescription;

// for (let i = 1; i <= 10; i++) {
//   numberDescription = `Number: ${i}`;
//   console.log(numberDescription);
// }

// totalSum = numberDescription;
// console.log(`Total Sum of Numbers from 1 to 10: ${totalSum}`);

let totalSum = 0;
let numberDescriptions = [];

// For loop to sum numbers and create descriptions
for (let i = 1; i <= 10; i++) {
  totalSum += i;
  numberDescriptions.push(`Number: ${i}`);
}

// For In Loop
let fruit = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for (let i in fruit) {
  console.log(i);
  console.log(`Fruit: ${fruit[i]}`);
}

// Looping through properties of an object using for...in the only loop you cn use to loop through object properties
// This is the only loop you can use to loop through object properties - For In Loop
// For In Loop is used to iterate over the properties of an object
// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   owner: "Alice",
// };

// for (let property in car) {
//   console.log(`${property}: ${car[property]}`);
// }

const userData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

let propertyDescriptions = [];

for (let property in userData) {
  propertyDescriptions.push(userData[property]);
}

console.log("User Data Descriptions:", propertyDescriptions);

// How to know if something is iterable or not
// An object is iterable if it has a Symbol.iterator property
// Arrays and strings are iterable in JavaScript
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// console.log("Is fruits iterable?", Symbol.iterator in fruits);
console.log("Is fruits iterable?", fruits[Symbol.iterator]);

// String is also iterable
let message = "Hello, World!";
console.log("Is message iterable?", message[Symbol.iterator]);

// Anything that has a Symbol.iterator property is iterable
// Anything that does not have a Symbol.iterator property is not iterable
// Anything that is iterable can be used with for...of loop
// ANything that is iterable in Javascript implements the Symbol.iterator property
let nonIterableObject = { name: "Alice", age: 25 };
console.log(
  "Is nonIterableObject iterable?",
  Symbol.iterator in nonIterableObject
);

// For Of Loop
let colors = ["Red", "Green", "Blue", "Yellow"];
for (let color of colors) {
  console.log(`Color: ${color}`);
}

const word = "JavaScript";
for (let char of word) {
  console.log(`Character: ${char}`);
}

const colorArray = new Array("Red", "Green", "Blue", "Yellow");
let colorDescriptions = [];

for (let color of colorArray) {
  colorDescriptions.push(`The color is ${color}`);
}

console.log("Color Descriptions:", colorDescriptions);
