let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
  "car owner": "MickyPary", // do not use spaces in keys
};

// Objects are mutable, meaning they can be changed after creation

// Mutable object
let carcopy = car; // This creates a reference to the same object
carcopy.color = "Red"; // Changing the color in the copy will change it in the original object
console.log("Original car: ", car); // Will also show the updated color
console.log("Car copy: ", carcopy); // Will show the updated color

// Immutable object
// let newCar = Object.assign({}, car); // This creates a shallow copy of the car object
// newCar.color = "Blue"; // Changing the color in the newCar will not affect the original car object
// console.log("New car: ", newCar); // Will show the updated color

// Using spread operator to create a copy
let newCar = { ...car };
newCar.color = "Blue"; // Changing the color in the newCar will not affect the original car object
console.log("New car: ", newCar); // Will show the updated color

let userInfo = {
  name: "John Doe",
  age: 30,
  isSubscriber: true,
  accountBalance: 100.5,
  userId: "12345",
};

let audi = new Object();
audi.brand = "Audi";
audi.color = "Black";
audi.model = "A7";
audi.make = 2024;
audi["car owner"] = "Jane Doe"; // Using a string with space as key
console.log("Audi: ", audi); // Empty object
console.log("Audi: ", audi.brand); // Empty object

console.log("Original car object: ", car);
console.log("Model: ", car.model);
console.log("Brand: ", car.brand);
console.log("Car Owner: ", car["car owner"]); // Accessing property with space in key

// Nested Objects
let carObject = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
  owner: {
    name: "John Doe",
    age: 45,
  },
};

console.log("Name of the owner: ", carObject.owner.name);
// let newCarObject = { ...carObject }; // Creating a shallow copy of the carObject
let newCarObject = structuredClone(carObject); // Using structuredClone to create a deep copy
newCarObject.owner.age = 50; // Changing the age in the newCarObject will not affect the original carObject
// newCarObject.owner = { name: "Mark" }; // This will replace the entire
newCarObject.owner.name = "Mark"; // Changing the name in the newCarObject will not
newCarObject.color = "Red";

// carObject.owner.name = "Taiwo Paul"; // Changing the owner's name
console.log("Updated owner name: ", carObject.owner.name);
console.log("new car ", newCarObject);
console.log("old car ", carObject);

// Arrays
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits: ", fruits[0]);

let numbers = [1, 2, 3, 4, 5];
let num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Numbers New: ", num);
// console.log("Numbers: ", numbers);

// let newFruits = fruits; // This creates a reference to the same array
let newFruits = [...fruits]; // This creates a shallow copy of the fruits array

// Add new array element
fruits.push("Grapes");
console.log("Updated Fruits: ", fruits);
console.log("New Fruits: ", newFruits); // Will show the updated fruits array

// Remove an element from the array
fruits.pop(); // Removes the last element
console.log("Updated Fruits: ", fruits);

let mixedArray = ["Hello", 42, true, null, { name: "John" }, [1, 2, 3]];
console.log("Mixed Array: ", mixedArray[4].name);
console.log("Mixed Array: ", mixedArray[5][0]);
