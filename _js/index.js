var age;
// age = 50;
let userName = "mickypary";
let isStudent = true;

// For Arithemtic Operations

let sum = 5 + 3;
let difference = 10 - 2;
let product = 4 * 2;
let quotient = 20 / 5;
let remainder = 28 % 10;
let power = 2 ** 3;
let number = 10;
number++;
let decrementNumber = 20;
decrementNumber--;

// For Assignment Operations
let a = 10;
a += 5;
let b = 20;
b -= 5;
let c = 30;
c *= 2;
let d = 40;
d /= 2;
let e = 50;
e %= 4;
let f = 2;
f **= 3;

// For Comparison Operations
let isEqual = 5 == "5"; // true, value is equal
let isStrictEqual = 5 === "5"; // false, value and type are not equal
let isNotEqual = 5 != "5"; // false, value is equal
let isStrictNotEqual = 5 !== "5"; // true, value and type are not equal
let isGreaterThan = 10 > 8; // true
let isGreaterThanOrEqual = 10 >= 10; // true

// For Logical Operations
let andResult = true && false; // false
let orResult = true || false; // true

// Mutablility and Spread Operator
let originalObject = {
  name: "John Doe",
  age: 30,
};

let clonedObject = { ...originalObject };
clonedObject.age = 35;
console.log("Original Object:", originalObject); // { name: "John Doe", age: 30 }
console.log("Cloned Object:", clonedObject); // { name: "John Doe", age

// Nested Object Exercise
const userProfile = {
  userId: "AB123",
  personalInfo: {
    name: "Alice Johnson",
    age: 28,
  },
  contactDetails: {
    email: "alice@example.com",
    phone: "123-456-7890",
  },
};

// let modifiedUserProfile = structuredClone(userProfile);
// modifiedUserProfile.personalInfo.age = 30;

userProfile.personalInfo.age += 2;

console.log("userProfile: ", userProfile);
// console.log("modifiedUserProfile: ", modifiedUserProfile);
