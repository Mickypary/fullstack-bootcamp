// let result = greet("Alice"); // "Hello, Alice!"
// console.log(result);

// // function declaration has a unique property called "hoisting"
// // which allows it to be called before its definition in the code.
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// // Function expression
// // Function expressions are not hoisted, so they cannot be called before their definition.
// // console.log(sayGoodbye("Bob")); // This will throw an error
// const sayGoodbye = function (name) {
//   return `Goodbye, ${name}!`;
// };
// console.log(sayGoodbye("Bob")); // "Hello, Bob!"

// // Arrow function
// // Arrow functions are a more concise syntax for writing function expressions.
// // They do not have their own "this" context and are often used for callbacks or short functions.
// // Arrow functions are also not hoisted, so they cannot be called before their definition.
// const greetArrow = (name) => `Hello, ${name}!`;
// const add = (a, b) => {
//   return a + b;
// };
// const multiply = (a, b) => a * b;

// console.log(greetArrow("Paul Smith")); // "Hello, Alice!"
// console.log(add(4, 8));
// console.log(multiply(2, 6));

// Using regular function declaration
function calculateSum(a, b) {
  return a + b;
}

let sum = calculateSum(5, 3);
console.log(sum);

// Using function expression
const findMax = function (a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
};

let max = findMax(10, 20);
console.log(max);

// Using arrow function
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isEven = (number) => number % 2 === 0;

let even = isEven(7);
console.log(even);
