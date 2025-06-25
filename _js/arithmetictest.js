function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value;
  } catch (e) {
    document.getElementById(id).textContent = "Error: " + e.message;
  }
}

// Display results
displayValue("outputSum", sum);
displayValue("outputDifference", difference);
displayValue("outputProduct", product);
displayValue("outputQuotient", quotient);
displayValue("outputRemainder", remainder);
displayValue("outputPower", power);
displayValue("outputIncrement", number);
displayValue("outputDecrement", decrementNumber);
