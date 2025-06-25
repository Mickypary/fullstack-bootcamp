function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value.toString();
  } catch (e) {
    console.error("Error displaying value for " + id + ": " + e.message);
  }
}

// Display the ages to confirm they are different
displayValue("outputOriginalAge", originalObject.age);
displayValue("outputClonedAge", clonedObject.age);
