function displayValue(id, value) {
  try {
    document.getElementById(id).textContent = value.toString();
  } catch (e) {
    console.error("Error displaying value for " + id + ": " + e.message);
  }
}

// Display object properties
try {
  displayValue("outputName", userInfo.name);
  displayValue("outputAge", userInfo.age);
  displayValue("outputIsSubscriber", userInfo.isSubscriber);
  displayValue("outputAccountBalance", userInfo.accountBalance);
  displayValue("outputUserId", userInfo.userId);
} catch (error) {
  console.error("Error in displaying properties: " + error.message);
}
