let age = 16;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

let score = 95;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

let isWeekend = true;
let isSunny = false;

if (isWeekend) {
  if (isSunny) {
    console.log("It's a sunny weekend! Let's go to the park.");
  } else {
    console.log("It's a weekend, but not sunny. Let's stay in and relax.");
  }
} else {
  console.log("It's a weekday. Time to work!");
}

// 4 Falsy values in JavaScript
let value = 0;
if (value) {
  console.log("This value is truthy.");
} else {
  console.log(value, "This value is falsy.");
}

let value1 = null;
if (value1) {
  console.log("This value is truthy.");
} else {
  console.log(value1, "This value is falsy.");
}

let value2 = undefined;
if (value2) {
  console.log("This value is truthy.");
} else {
  console.log(value2, "This value is falsy.");
}

let value3 = "";
if (value3) {
  console.log("This value is truthy.");
} else {
  console.log('""', "This value is falsy.");
}
