// let operator = "+"; //+, -, *, /
// let num1 = 10;
// let num2 = 5;
// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     console.log("Addition: ", result);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log("Subtraction: ", result);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log("Product: ", result);
//     break;
//   case "/":
//     result = num1 / num2;
//     console.log("Division: ", result);
//     break;

//   default:
//     console.log("Invalid operator");
//     break;
// }

let dayNumber = "2"; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
let dayName;

switch (dayNumber) {
  case "1":
    dayName = "Monday";
    console.log("Day: ", dayName);
    break;
  case "2":
    dayName = "Tuesday";
    console.log("Day: ", dayName);
    break;
  case "3":
    dayName = "Wednesday";
    console.log("Day: ", dayName);
    break;
  case "4":
    dayName = "Thursday";
    console.log("Day: ", dayName);
    break;
  case "5":
    dayName = "Friday";
    console.log("Day: ", dayName);
    break;
  case "6":
    dayName = "Saturday";
    console.log("Day: ", dayName);
    break;
  case "7":
    dayName = "Sunday";
    console.log("Day: ", dayName);
    break;
  default:
    dayName = "Invalid day";
    console.log("Day: ", dayName);
    break;
}
