function sum(...args) {
  // console.log(args);
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

function multiplier(multiplier, ...numbers) {
  let result = [];
  for (let num of numbers) {
    result.push(num * multiplier);
  }
  return result;
}

console.log(multiplier(2, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Classwork
function sumNumbers(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

let result1 = sumNumbers(1, 2, 3);
console.log(result1);

let result2 = sumNumbers(10,20,30,40,50);
console.log(result2);

let result3 = sumNumbers();
console.log(result3);
