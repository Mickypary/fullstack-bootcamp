// Safely attempt to display each variable
function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value;
  } catch (e) {
    document.getElementById(id).textContent = "Error: " + e.message;
  }
}

// Display age
displayValue("outputAge", typeof age !== "undefined" ? age : "undefined");

// Display userName
displayValue(
  "outputUserName",
  typeof userName !== "undefined" ? userName : "undefined"
);

// Display isStudent
displayValue(
  "outputIsStudent",
  typeof isStudent !== "undefined" ? isStudent : "undefined"
);
