const car = {
  brand: "BMW",
  model: "7 Series",
  year: 2024,
};

function printDetails({ brand: carBrand, model, year }) {
  console.log(`Brand: ${carBrand}, Model: ${model}, Year: ${year}`);
}

printDetails(car);

// Using Traditional way
const scores = [95, 85, 75, 54, 67, 49];
// function printScores(scores) {
//   console.log(`1st: ${scores[0]}, 2nd: ${scores[1]}, 3rd: ${scores[2]}`);
// }

// printScores(scores);

// Using Array Destructuring
function printScores([first, second, third, ...restScores]) {
  console.log(`1st: ${first}, 2nd: ${second}, 3rd: ${third}`);
  console.log(restScores);
}

printScores(scores);

function processScores([firstScore, secondScore]) {
  return firstScore + secondScore;
}

const result1 = processScores([80, 90, 70, 60]);
console.log(result1);

const result2 = processScores([75, 85]);
console.log(result2);

function displayPersonInfo({ name, age }) {
  return `${name} is ${age} years old`;
}

let infoAlice = displayPersonInfo({ name: "Alice", age: 30, job: "Developer" });
console.log(infoAlice);

let infoBob = displayPersonInfo({ name: "Bob", age: 25 });
console.log(infoBob);
