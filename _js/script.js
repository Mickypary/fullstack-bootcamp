// let car = {
//   brand: "BMW",
//   model: "7 Series",
//   color: "White",
//   make: 2024,
//   "car owner": "MickyPary", // do not use spaces in keys
// };

// // Objects are mutable, meaning they can be changed after creation

// // Mutable object
// let carcopy = car; // This creates a reference to the same object
// carcopy.color = "Red"; // Changing the color in the copy will change it in the original object
// console.log("Original car: ", car); // Will also show the updated color
// console.log("Car copy: ", carcopy); // Will show the updated color

// // Immutable object
// // let newCar = Object.assign({}, car); // This creates a shallow copy of the car object
// // newCar.color = "Blue"; // Changing the color in the newCar will not affect the original car object
// // console.log("New car: ", newCar); // Will show the updated color

// // Using spread operator to create a copy
// let newCar = { ...car };
// newCar.color = "Blue"; // Changing the color in the newCar will not affect the original car object
// console.log("New car: ", newCar); // Will show the updated color

// let userInfo = {
//   name: "John Doe",
//   age: 30,
//   isSubscriber: true,
//   accountBalance: 100.5,
//   userId: "12345",
// };

// let audi = new Object();
// audi.brand = "Audi";
// audi.color = "Black";
// audi.model = "A7";
// audi.make = 2024;
// audi["car owner"] = "Jane Doe"; // Using a string with space as key
// console.log("Audi: ", audi); // Empty object
// console.log("Audi: ", audi.brand); // Empty object

// console.log("Original car object: ", car);
// console.log("Model: ", car.model);
// console.log("Brand: ", car.brand);
// console.log("Car Owner: ", car["car owner"]); // Accessing property with space in key

// // Nested Objects
// let carObject = {
//   brand: "BMW",
//   model: "7 Series",
//   color: "White",
//   make: 2024,
//   owner: {
//     name: "John Doe",
//     age: 45,
//   },
// };

// console.log("Name of the owner: ", carObject.owner.name);
// // let newCarObject = { ...carObject }; // Creating a shallow copy of the carObject
// let newCarObject = structuredClone(carObject); // Using structuredClone to create a deep copy
// newCarObject.owner.age = 50; // Changing the age in the newCarObject will not affect the original carObject
// // newCarObject.owner = { name: "Mark" }; // This will replace the entire
// newCarObject.owner.name = "Mark"; // Changing the name in the newCarObject will not
// newCarObject.color = "Red";

// // carObject.owner.name = "Taiwo Paul"; // Changing the owner's name
// console.log("Updated owner name: ", carObject.owner.name);
// console.log("new car ", newCarObject);
// console.log("old car ", carObject);

// // Arrays
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log("Fruits: ", fruits[0]);

// let numbers = [1, 2, 3, 4, 5];
// let num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log("Numbers New: ", num);
// // console.log("Numbers: ", numbers);

// // let newFruits = fruits; // This creates a reference to the same array
// let newFruits = [...fruits]; // This creates a shallow copy of the fruits array

// // Add new array element
// fruits.push("Grapes");
// console.log("Updated Fruits: ", fruits);
// console.log("New Fruits: ", newFruits); // Will show the updated fruits array

// // Remove an element from the array
// fruits.pop(); // Removes the last element
// console.log("Updated Fruits: ", fruits);

// let mixedArray = ["Hello", 42, true, null, { name: "John" }, [1, 2, 3]];
// console.log("Mixed Array: ", mixedArray[4].name);
// console.log("Mixed Array: ", mixedArray[5][0]);

// Linked to dom.html
// let heading = document.getElementById("main-title");
// console.log(heading);

// let paragraphs = document.getElementsByClassName("content");
// console.log(paragraphs);

// let divElements = document.getElementsByTagName("div");
// console.log(divElements);

// for (const para of paragraphs) {
//   console.log(para.innerText);
// }

// let firstHeading = document.querySelector("h1");
// console.log(firstHeading.textContent);

// let allHeading = document.querySelectorAll("h1");

// for (const first of allHeading) {
//   console.log(first.textContent);
// }

// let firstParagraph = document.querySelector(".intro");
// console.log(firstParagraph.textContent);

// let allParagraph = document.querySelectorAll(".intro");
// console.log(allParagraph);

// for (const first of allParagraph) {
//   console.log(first.textContent);
// }

// function updateImageAttribute() {
//   let imageElement = document.getElementById("exampleImage");

//   let imgSrc = imageElement.getAttribute("src");
//   let imgAlt = imageElement.getAttribute("alt");

//   console.log(imgSrc);
//   console.log(imgAlt);

//   imageElement.setAttribute("src", "../images/blog-image3.png");
//   imageElement.setAttribute("alt", "Updated Placeholder Image");
// }

// function applyStyles() {
//   let box1 = document.getElementById("box1");

//   box1.style.backgroundColor = "green";
//   box1.style.borderColor = "red";
//   box1.style.width = "200px";
//   box1.style.height = "200px";

//   console.log(box1.style);
// }

// function toggleClass() {
//   let box2 = document.getElementById("box2");

//   box2.classList.toggle("highlight");
//   box2.classList.toggle("large");

//   console.log(box2.className);
// }

// Node Traversal
// let paragraph = document.getElementById("paragraph");

// let parentNode = paragraph.parentNode;
// console.log("ParentNode: ", parentNode);

// let parentElement = paragraph.parentElement;
// console.log("ParentElement: ", parentElement);

// let textNode = document.getElementById("textNodeExample").firstChild;
// console.log(textNode);

// let parentElementTextNode = textNode.parentElement;
// console.log(parentElementTextNode);

// let parentNodeTextNode = textNode.parentNode;
// console.log(parentNodeTextNode);

// let htmlElement = document.documentElement;
// console.log(htmlElement.parentNode);
// console.log(htmlElement.parentElement);

// let parentDiv = document.querySelector("span").parentElement;
// let parentNode = document.querySelector("span").parentNode;

// console.log("parentElement: ", parentDiv);
// console.log("parentNode: ", parentDiv);

// let parentContainer = document.getElementById("parent");

// let childNodes = parentContainer.childNodes; // NodeList

// console.log(childNodes);

// let children = parentContainer.children; // HTmL Elements

// console.log("Children ", children);

// let parentContainer2 = document.getElementById("parent2");
// let childNodes2 = parentContainer2.childNodes; // NodeList
// console.log(childNodes2);

// Node Exercise
// let nextsib = document.getElementById("middle");

// let nextSiblingNode = nextsib.nextSibling;

// let previousSiblingNode = nextsib.previousSibling;

// let nextSiblingElement = nextsib.nextElementSibling;

// let previousSiblingElement = nextsib.previousElementSibling;

// console.log("nextSiblingNode ", nextSiblingNode);

// console.log("previousSiblingNode ", previousSiblingNode);

// console.log("nextSiblingElement ", nextSiblingElement);

// console.log("previousSiblingElement ", previousSiblingElement);

// function handleInlineClick() {
//   alert("Inline handler");
// }

// document
//   .getElementById("addEventListenerButton")
//   .addEventListener("click", function () {
//     alert("Add Event handler");
//   });

// document.getElementById("onEventButton").addEventListener("click", () => {
//   alert("On Event handler");
// });

// This has a disadvantage of getting overidden by another onclick with the same event handler
// document.getElementById("onEventButton").onclick = () =>
//   alert("On Event handler");

// function inlineHandle() {
//   document.getElementById("inlineBtn").innerHTML = "Clicked!";
// }

// document.getElementById("onEventBtn").onclick = function () {
//   this.style.backgroundColor = "blue";
// };

// document.getElementById("listenerBtn").addEventListener("click", () => {
//   alert("Hello");
// });

// document.getElementById("eventTypeBtn").addEventListener("click", function (e) {
//   console.log(e.type);
// });

// document.getElementById("eventDiv").addEventListener("click", function (e) {
//   e.target.textContent = "I was clicked!";
//   console.log(e.target);
// });

// document.getElementById("eventDiv").addEventListener("click", function (e) {
//   e.currentTarget.style.backgroundColor = "yellow";
//   console.log(e.currentTarget);
// });

// const eventArea = document.getElementById("eventArea");

// eventArea.addEventListener("mouseover", function () {
//   console.log("Mouse over the area");
//   this.style.backgroundColor = "lightblue";
// });

// eventArea.addEventListener("mouseout", function () {
//   console.log("Mouse out of the area");
//   this.style.backgroundColor = "#f0f0f0";
// });

// eventArea.addEventListener("mousedown", function () {
//   console.log("Mouse button down");
//   this.style.backgroundColor = "lightgreen";
// });

// eventArea.addEventListener("mouseup", function () {
//   console.log("Mouse button up");
//   this.style.backgroundColor = "pink";
// });

// eventArea.addEventListener("click", function () {
//   console.log("Area clicked");
// });

// const clickBtn = document.getElementById("clickBtn");

// clickBtn.addEventListener("click", function () {
//   this.textContent = "Clicked!";
// });

// const hoverDiv = document.getElementById("hoverDiv");
// hoverDiv.addEventListener("mouseover", function () {
//   this.style.backgroundColor = "blue";
// });

// hoverDiv.addEventListener("mouseout", function () {
//   this.style.backgroundColor = "#fff";
// });

// const dblClickP = document.getElementById("dblClickP");
// dblClickP.addEventListener("dblclick", function () {
//   this.style.fontStyle = "italic";
// });

// const inputField = document.getElementById("inputField");

// inputField.addEventListener("keydown", function (event) {
//   console.log(`Key down:, ${event.key} Code: ${event.code}`);
// });

// Deprecated
// inputField.addEventListener("keypress", function (event) {
//   console.log(`Key press:, ${event.key} Code: ${event.code}`);
// });

// inputField.addEventListener("keyup", function (event) {
//   console.log(`Key up:, ${event.key}`);
//   if (event.key === "Enter") {
//     console.log("Enter Pressed");
//     alert("Command Executed!");
//   }
// });

// const inputField = document.getElementById("inputField");
// const keyPressedDisplay = document.getElementById("keyPressedDisplay");
// const charCountDisplay = document.getElementById("charCountDisplay");

// let charCount = 0;

// inputField.addEventListener("keydown", function (event) {
//   keyPressedDisplay.textContent = event.key;
// });

// inputField.addEventListener("keypress", function (event) {
//   // Increase character count only if the key produces a character.
//   charCount++;
//   charCountDisplay.textContent = charCount;
// });

// inputField.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     inputField.style.backgroundColor = "#D3D3D3"; // Light Gray
//   }
// });

// Form event
// document
//   .getElementById("exampleForm")
//   .addEventListener("submit", function (event) {
//     console.log("Form Submitted");
//     event.preventDefault();
//     console.log("own js code");
//   });

// document.getElementById("textInput").addEventListener("input", function () {
//   console.log("Text Input: ", this.value);
// });

// document.getElementById("emailInput").addEventListener("change", function () {
//   console.log("Email Changed: ", this.value);
// });

// document.getElementById("passwordInput").addEventListener("focus", function () {
//   console.log("Password focus");
// });

// document.getElementById("passwordInput").addEventListener("blur", function () {
//   console.log("Password blur");
// });

// document
//   .getElementById("checkboxInput")
//   .addEventListener("change", function () {
//     console.log(this.checked ? "checked" : "unchecked");
//   });

// document.getElementById("fileInput").addEventListener("change", function () {
//   console.log(this.files);
//   console.log(this.files[0]);
//   console.log(this.files[0].name);
// });

// let error = document.getElementById("error");
// let message = document.getElementById("message");

// document.getElementById("myForm").addEventListener("submit", function (e) {
//   console.log("Form Submitted!");
//   e.preventDefault();
//   message.textContent = "Form Submitted!";
// });

// document.getElementById("username").addEventListener("focus", function () {
//   this.style.backgroundColor = "lightblue";
// });

// document.getElementById("username").addEventListener("blur", function (e) {
//   this.style.backgroundColor = "white";
//   console.log(this.value);
//   if (this.value === "") {
//     error.textContent = "Input cannot be empty!";
//   }
// });

// Window Event

// window.addEventListener("load", function () {
//   console.log("Window fully loaded");
//   // alert("Window is loaded");
// });

// window.addEventListener("resize", function () {
//   console.log(`Resized to: ${this.innerWidth} x ${this.innerHeight}`);
// });

// window.addEventListener("scroll", function () {
//   console.log(`You are scrolling`);
// });

// window.addEventListener("beforeunload", function (e) {
//   let confirmationMessage = "Are you sure you want to leave?";
//   e.preventDefault();
//   e.returnValue = confirmationMessage;
// });

// Event Propagation
// const outer = document.getElementById("outer");
// const middle = document.getElementById("middle");
// // const inner = document.getElementById("inner");

// function logEvent(e) {
//   console.log(`${e.currentTarget.id}, ${e.type} handled as ${e.eventPhase}`);

//   if (e.currentTarget.id == "middle") {
//     e.stopPropagation();
//     console.log(`Event was stopped in the middle`);
//   }
// }

// Capture Phase
// outer.addEventListener("click", logEvent, true);
// middle.addEventListener("click", logEvent, true);
// inner.addEventListener("click", logEvent, true);

// Capture Phase is the default with implicit false argument
// outer.addEventListener("click", logEvent, false);
// middle.addEventListener("click", logEvent, false);
// inner.addEventListener("click", logEvent, false);

// const parentDiv = document.getElementById("parentDiv");
// const childButton = document.getElementById("childButton");

// function handleClickBubble(e) {
//   if (e.currentTarget.id == "parentDiv") {
//     console.log(`Parent Div clicked!`);
//   } else if (e.currentTarget.id == "childButton") {
//     console.log(`Button clicked!`);
//     e.stopPropagation();
//   }
// }

// function handleClickCapture(e) {
//   if (e.currentTarget.id == "parentDiv") {
//     console.log(`Parent Div clicked during capture!`);
//   } else if (e.currentTarget.id == "childButton") {
//     console.log(`Button clicked during capture!`);
//   }
// }

// parentDiv.addEventListener("click", handleClickBubble);
// childButton.addEventListener("click", handleClickBubble);

// parentDiv.addEventListener("click", handleClickCapture, true);
// childButton.addEventListener("click", handleClickCapture, true);

// Event Delegation
// const taskList = document.getElementById("taskList");
// taskList.addEventListener(
//   "click",
//   function (event) {
//     if (event.target.className === "deleteButton") {
//       const task = event.target.parentElement;
//       taskList.removeChild(task);
//       console.log("Task Deleted: ", task.textContent);
//     }
//   },
//   false
// );

// window Object
// document.getElementById("btnOpen").addEventListener("click", function () {
//   window.open("https://google.com", "_blank");
//   console.log(window.document);
//   console.log(window);
// });

// document.getElementById("btnShowProps").addEventListener("click", function () {
//   alert(
//     `
//       Screen Width: ${window.screen.width}px
//       Screen Height: ${window.screen.height}px
//       Screen Avail Width: ${window.screen.availWidth}px
//       Screen Avail Height: ${window.screen.availHeight}px
//       Color Depth: ${window.screen.colorDepth}bits
//       Pixel Depth: ${window.screen.pixelDepth}bits
//     `
//   );
// });

// Location OBject
// document.getElementById("showHref").addEventListener("click", function () {
//   console.log("Current Url", window.location.href);
// });

// document.getElementById("showHostname").addEventListener("click", function () {
//   console.log("Hostname: ", window.location.hostname);
// });

// document.getElementById("showPathname").addEventListener("click", function () {
//   console.log("Pathname: ", window.location.pathname);
// });

// document.getElementById("showProtocol").addEventListener("click", function () {
//   console.log("Protocol: ", window.location.protocol);
// });

// document.getElementById("goToSite").addEventListener("click", function () {
//   window.location.assign("https://google.com");
// });

// console.log(window.location);

const dim = document.getElementById("dimensions");
const url = document.getElementById("urlInfo");
const info = document.getElementById("browserInfo");
window.addEventListener("resize", function () {
  dim.textContent = `${window.innerWidth} x ${this.window.innerHeight}`;
});

window.addEventListener("load", function () {
  url.textContent += ` ` + window.location.href;
});

info.textContent += ` ` + window.navigator.userAgent;
