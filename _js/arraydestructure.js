const fruits = ["Apple", "Banana", "Orange"];

// let firstValue = fruits[0];
// let secondValue = fruits[1];

// To achieve the above, there is a shorthand known as destructuring
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

const numbers = [1, 2, 3, 4, 5, 6];
// let [one, two, ...test] = numbers;
let [one, , three, ...restNumbers] = numbers;
console.log(one);
console.log(three);
console.log(restNumbers);

// Destructuring Nested Array
const nestedArray = [1, [2, 3], 4];
const [firstNum, [firstInner, secondInner], four] = nestedArray;
console.log(firstNum);
console.log(secondInner);
console.log(four);
