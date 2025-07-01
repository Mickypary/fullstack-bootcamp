const numbers = [1, 2, 3, 4, 5];

let squares = numbers.map((number, index) => number * number);
console.log(squares);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];

// use this ({}) to return an object from arrow function
let usersWithBirthYear = users.map((user) => ({
  // Note: we are not using the return keyword because we have added the parenthesis before and after the curly braces to represent an object
  ...user,
  birthYear: new Date().getFullYear() - user.age,
}));

console.log(users);
console.log(usersWithBirthYear);

const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Coffee Maker", price: 100, category: "Kitchen" },
  { name: "Book", price: 20, category: "Literature" },
];

//  Write your code below this line
let productNames = products.map((product) => product.name);

console.log(productNames);

let productPricesWithTax = products.map((product) => product.price * 1.1);

console.log(productPricesWithTax);
