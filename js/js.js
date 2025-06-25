var name;
name = "Mickypary";
name = "John";
var lastname = "Doe"; // 'var' allows reassignment
let fullName = name + " " + lastname;
console.log(fullName);
console.log(name);
console.log(typeof name); // This will log "string"

// Number primitive type
let _age = 25;
_age = 30; // This is allowed because 'let' allows reassignment
let newAge = _age + 1;
console.log(newAge);
console.log(typeof _age); // This will log "number"

const COUNTRY = "USA";
// COUNTRY = "Canada"; // This will throw an error because constants cannot be reassigned
console.log(COUNTRY);

// Boolean primitive type
let isStudent = true;
let isTeacher = false;

// =================================================
// Template Literals
let greeting = `Hello, my name is ${name} and I am ${_age} years old. I live in ${COUNTRY}.`;
console.log(greeting);

let multiLineString = `This is a multiline string
that spans multiple lines.`;

console.log(multiLineString);

let firstName = "Alice";
// let greetingMessage = "Hello, " + firstName + "!"; // Concatenation
// string interpolation
let greetingMessage = `Hello, ${firstName}`; // Concatenation
console.log(greetingMessage);

// Max Integer in JavaScript
let maxInteger = Number.MAX_SAFE_INTEGER;
console.log(maxInteger); // 9007199254740991

// BigInt
let bigInteger = BigInt(maxInteger);
console.log(bigInteger); // 9007199254740991n
console.log(typeof bigInteger); // 9007199254740991n
