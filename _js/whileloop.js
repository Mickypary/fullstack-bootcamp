// let count = 0;

// while (count < 5) {
//   console.log("Count is: " + count);
//   count++;
// }

// let number = 0;

// while (number < 1 || number > 10) {
//   console.log("Number: ", number);
//   number++;
// }

// // This do while loop will execute at least once even if the condition is false
// let i = 6;

// do {
//   console.log("i is: " + i);
//   i++;
// } while (i < 11);

let count = 1;
let whileResults = [];
let doWhileResults = [];

while (count <= 5) {
  whileResults.push(count);
  count++;
}

console.log("While loop results:", whileResults);

let number = 6;

do {
  doWhileResults.push(number);
  number++;
} while (number < 10);

console.log("While loop results:", doWhileResults);
