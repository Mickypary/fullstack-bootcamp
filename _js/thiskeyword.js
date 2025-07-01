// How to check execution context in JavaScript
// Use the `this` keyword to determine the execution context

console.log(this); // In the global context, `this` refers to the global object (window in browsers)

let car = {
  brand: "BMW",
  model: "7 Series",
  display() {
    console.log(this); // In this method, `this` refers to the car object
  },
};

car.display(); // Calling the display method will log the car object

function showThis() {
  console.log(this); // In a regular function, `this` refers to the global object (window in browsers)
}

showThis(); // Calling the function will log the global object
