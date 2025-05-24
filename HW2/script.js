function processPasscode() {
  const correctPasscode = 202546;

  const input = prompt("Please enter 6-digit passcode:");

  // Source from https://www.geeksforgeeks.org/
  const input_toNumber = Number(input);

  const messageElement = document.querySelector("#lockedMessage");

  if (input_toNumber === correctPasscode) {
    // Source from https://www.geeksforgeeks.org/
    messageElement.textContent =
      "Welcome! The secret message is: 'HTML, CSS, & JavaScript are absolutely wonderful magic!'";
    messageElement.style.color = "lightblue";
    messageElement.style.fontWeight = "normal";
    messageElement.style.fontSize = "16px";
  } else {
    messageElement.textContent = "Incorrect passcode! Please try again!";
    messageElement.style.color = "red";
    messageElement.style.fontWeight = "bold";
    messageElement.style.fontSize = "18px";
  }
}
