// let example = "JavaScript is Awesome";

// console.log(example.length);

// console.log(example.charAt(4));
// console.log(example.indexOf("is"));
// console.log(example.toUpperCase());
// console.log(example.toLowerCase());
// console.log(example.substring(11));
// console.log(example.replace("JavaScript", "JS"));
// console.log(example.split(" "));

// let sampleText = "Hello, JavaScript World!";
// let charAtIndex = sampleText.charAt(7);
// console.log(charAtIndex);

// let upperCaseText = sampleText.toUpperCase();
// console.log(upperCaseText);

// let substringText = sampleText.substring(7, 14);
// console.log(substringText);

// let replacedText = sampleText.replace("JavaScript", "JS");
// console.log(replacedText);

// let wordsArray = [];
// wordsArray = sampleText.split(" ");
// console.log(wordsArray);

// let num = 3.14159;
// console.log(num.toFixed(3));
// console.log(typeof num.toString());

// let large = 123456;
// console.log(large.toExponential(2));

const sampleNumber = "123.456";
const convertedNumber = parseFloat(sampleNumber);
const roundedNumber = Math.round(convertedNumber);
const preciseNumber = parseFloat(convertedNumber.toFixed(2));
const numberString = convertedNumber.toFixed(2);
const exponentialNumber = convertedNumber.toExponential();
console.log(typeof convertedNumber);
console.log(roundedNumber);
console.log(typeof preciseNumber);
console.log(typeof numberString);
