function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value;
  } catch (e) {
    document.getElementById(id).textContent = "Error: " + e.message;
  }
}

// Display results
displayValue("outputAddAssign", a);
displayValue("outputSubtractAssign", b);
displayValue("outputMultiplyAssign", c);
displayValue("outputDivideAssign", d);
displayValue("outputModulusAssign", e);
displayValue("outputExponentiationAssign", f);
