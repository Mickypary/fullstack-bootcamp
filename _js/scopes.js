let globalVar = "globalVar"; // Global variable
let globalLet = "globalLet"; // Global variable with let

function checkGlobalScope() {
  // Accessing global variables
  console.log("Accessing Global Variable (var):", globalVar);
  console.log("Accessing Global Variable (let):", globalLet);
}

checkGlobalScope();

function localScope() {
  let localVar = "localVar"; // Local variable
  let localLet = "localLet"; // Local variable with let

  console.log("Local Variable (var):", localVar);
  console.log("Local Variable (let):", localLet);
}

// Accessing local variables outside their scope will throw an error
// console.log("Local Variable (var):", localVar);
// console.log("Local Variable (let):", localLet);

localScope();

// function blockScope() {
if (true) {
  var blockVar = "blockVar"; // Function-scoped variable
  let blockLet = "blockLet"; // Block-scoped variable
  console.log("Inside Block - Var:", blockVar);
  console.log("Inside Block - Let:", blockLet);
}

console.log("Outside Block - Var:", blockVar); // Accessible outside the block
// console.log("Outside Block - Let:", blockLet); // Not accessible outside the block, will throw an error
// }

// blockScope();
