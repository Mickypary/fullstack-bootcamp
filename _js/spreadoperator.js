let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];

let combined = [...numbers, ...moreNumbers];
console.log(combined);

let fruits = ["Apple", "Banana", "Orange"];
let moreFruits = ["Grapes", ...fruits, "Pineapple"];
console.log(moreFruits);

let nestedArray = [
  [1, 2],
  [3, 4],
];

// let copiedArray = [...nestedArray]; // Shallow copy
// console.log(copiedArray);

console.log(nestedArray);

// For nested array spread operator doesnt copy the nested array so we might have to use maybe a for of loop to manipulate or use structuredClone method in JS; i.e changing anything in the original array still affects the copied array (Called Deep copy or cloning)

// let copiedArray = [];
// for (array of nestedArray) {
//   console.log(array);
//   copiedArray.push([...array]);
// }

// nestedArray[0][0] = 7;

// console.log(copiedArray);

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

let combinedArray = [...arrayOne, ...arrayTwo];

let copiedArray = [...combinedArray];
copiedArray.push(7);

console.log(combinedArray);
console.log(copiedArray);

// ============================================

let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
};

let updatedCar = { ...car, color: "Black" };
console.log(car);
console.log(updatedCar);

let owner = {
  name: "John",
  age: 30,
};

let carWithOwner = { ...car, ...owner };
console.log(carWithOwner);

let nestedOwner = { ...car, owner: { ...owner } };
// let nestedOwner = { ...car, ...{ owner } };
console.log(nestedOwner);

let updateCar = {
  color: "Red",
  make: 2025,
};

let finalCar = { ...car, ...updateCar };
console.log(finalCar);

let person = {
  name: "John",
  age: 25,
};

let job = {
  title: "Developer",
  company: "Tech Co",
};

let employee = { ...person, ...job, age: 30, yearStarted: 2020 };

let employeeCopy = { ...employee, company: "New Tech Co" };

console.log(employee);

console.log(employeeCopy);

// function orderCoffee(size = "medium", type) {
//   console.log(`You ordered a ${size} ${type} coffee `);
// }

// orderCoffee("small", "Red");

function createGreeting(name = "Guest", message = "Welcome to our site!") {
  return `${message} ${name}`;
}

let defaultGreeting = createGreeting();
console.log(defaultGreeting);

let greetingForAlice = createGreeting("Alice");
console.log(greetingForAlice);

let customGreetingForBob = createGreeting("Bob", "Happy to see you!");
console.log(customGreetingForBob);

function sum(a, b, c) {
  return a + b + c;
}

const number = [1, 2, 3];

let result = sum(...number);
console.log(result);

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const num1 = [2, 3];
const num2 = [4, 5];

let result1 = multiply(...num1, ...num2);
console.log(result1);
