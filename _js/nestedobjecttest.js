function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value.toString();
  } catch (e) {
    console.error("Error displaying value for " + id + ": " + e.message);
  }
}

// Display the name, email, and updated age
displayValue("outputName", userProfile.personalInfo.name);
displayValue("outputEmail", userProfile.contactDetails.email);
displayValue("outputUpdatedAge", userProfile.personalInfo.age);
