function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value.toString();
  } catch (e) {
    document.getElementById(id).textContent = "Error: " + e.message;
  }
}

// Display results
displayValue("outputIsEqual", isEqual);
displayValue("outputIsStrictEqual", isStrictEqual);
displayValue("outputIsNotEqual", isNotEqual);
displayValue("outputIsStrictNotEqual", isStrictNotEqual);
displayValue("outputIsGreaterThan", isGreaterThan);
displayValue("outputIsGreaterThanOrEqual", isGreaterThanOrEqual);
