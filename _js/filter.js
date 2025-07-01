const numbers = [5, 10, 15, 20, 25];

let = filteredNumber = numbers.filter((number) => number > 10);
console.log(filteredNumber);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];

let = olderThan25 = users.filter((user) => user.age > 25);
console.log(olderThan25);

const mixedNumbers = [2, 56, 7, 1, 9, 0, 32, 3, 8, 12, 21, 6, 4, 10];

const numbersArray = [1, -2, 3, 4, -5, 6, -7, 8, 9, -10];

const positiveNumbers = numbersArray.filter((pos) => pos > 0);

console.log(positiveNumbers);

const evenNumbers = numbersArray.filter((even) => even % 2 === 0);

console.log(evenNumbers);
