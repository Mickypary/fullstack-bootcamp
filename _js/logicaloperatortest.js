function displayValue(id, value) {
  let displayText = ""; // Initialize display text
  if (value === undefined) {
    displayText = "undefined"; // Explicitly handle undefined
  } else if (value === null) {
    displayText = "null"; // Explicitly handle null
  } else {
    displayText = value.toString(); // Convert other values to string
  }

  try {
    document.getElementById(id).textContent = displayText;
  } catch (e) {
    document.getElementById(id).textContent = "Error: " + e.message;
  }
}

// Display results
displayValue("outputAndResult", andResult);
displayValue("outputOrResult", orResult);
