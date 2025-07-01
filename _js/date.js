// This Date is a constructor function by default forming into a Date object by instantiating with the new keyword
// let currentDate = new Date();
// let specificDate = new Date(2023, 5, 2, 15, 30, 0);
// console.log(currentDate);
// console.log(specificDate);

// // getYear
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(typeof currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toTimeString());

let currentDate = new Date();
console.log(currentDate);
let currentYear = currentDate.getFullYear();
console.log(currentYear);
let currentMonth = currentDate.getMonth();
console.log(currentMonth);
currentDate.setDate(1);
// const firstDayOfMonth = new Date(currentDate);
const firstDayOfMonth = currentDate;
console.log(typeof firstDayOfMonth);
const formattedDate = `${
  currentDate.getMonth() + 1
}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
console.log(formattedDate);
