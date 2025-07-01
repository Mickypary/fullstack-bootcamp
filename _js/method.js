// let car = {
//   brand: "BMW",
//   model: "7 Series",
//   year: 2024,

//   describeCar: function () {
//     return `This car is a ${this.year} ${this.brand} ${this.model}.`;
//   },
// };

// console.log(car.describeCar()); // This car is a 2024 BMW 7 Series.

// // shorter syntax for methods in objects
// let calculator = {
//   num1: 3,
//   num2: 4,
//   // Using method shorthand syntax
//   add(a, b) {
//     return a + b;
//   },
//   // using arrow function syntax
//   subtract: function (a, b) {
//     return a - b;
//   },

//   check: () => {
//     console.log(this); // Will log the global object (or undefined in strict mode) because arrow functions do not have their own 'this'
//   },
//   check: function () {
//     console.log(this); // Will log the calculator object because regular functions have their own 'this'
//   },
// };

// calculator.check(); // Will log the calculator object
// console.log("Add Method ", calculator.add(5, 4)); // undefined, as the add method is empty
// console.log("Subtract Method ", calculator.subtract(5, 4)); // undefined, as the subtract method is empty

// Classwork

let vehicle = {
  type: "Car",
  color: "Red",

  startEngine() {
    return `The ${this.type}'s engine has started.`;
  },

  displayInfo() {
    return `This is a ${this.color} ${this.type}.`;
  },

  maintenance: {
    lastService: "2023-01-01",
    checkStatus: function () {
      return `The car was last serviced on ${this.lastService}`;
    },
  },
};

let engineStart = vehicle.startEngine();
console.log(engineStart);
let vehicleInfo = vehicle.displayInfo();
console.log(vehicleInfo);
let maintenanceStatus = vehicle.maintenance.checkStatus();
console.log(maintenanceStatus);
