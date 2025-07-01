const numbers = [5, 10, 25, 20, 25, 30];
const total = numbers.reduce((accumulator, current) => {
  console.log(accumulator, current);
  return accumulator + current;
}, 0);

console.log(total);

const items = [
  { name: "Apple", type: "fruit", quantity: 10 },
  { name: "Carrot", type: "vegetable", quantity: 8 },
  { name: "Banana", type: "fruit", quantity: 5 },
];

const inventory = items.reduce((accumulator, item) => {
  accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
  // item.fruit = "Pine";
  return accumulator;
}, {});

console.log(inventory);

const numbersArray = [10, 20, 30, 40, 50];

let totalSum = numbersArray.reduce((accumulator, number) => {
  return accumulator + number;
});

console.log(totalSum);

let maxValue = numbersArray.reduce((acc, num) => {
  return num > acc ? num : acc;
}, numbersArray[0]);

console.log(maxValue);
