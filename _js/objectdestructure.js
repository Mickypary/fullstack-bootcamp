const car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024,
};

// const { brand, ...color } = car;
// console.log(brand);
// console.log(color);

// Giving different name
const { brand: carBrand, model: modelBrand } = car;
console.log(carBrand);

const car1 = {
  brand: "BMW",
  model: "7 Series",
};

// If color and make property does not exist, create it while destructuring
const { color = "Red", make = 2021 } = car1;
console.log(color);

const carWithOwner = {
  brand: "BMW",
  model: "7 Series",
  color: "Pink",
  owner: {
    name: "John",
    age: 32,
  },
};

const {
  owner: { name: carOwner },
} = carWithOwner;

console.log(carOwner);

const { owner, ...carDetails } = carWithOwner;
console.log(owner);
console.log(carDetails);

owner.name = "Mark";
console.log(owner);
