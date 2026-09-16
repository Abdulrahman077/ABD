console.log("hello abdul");

let name = "rahman";
console.log("hello abdul " + name);

let age = 23;
let role = "developer";
const country = "india";

console.log(country);
console.log(age);
console.log(role);

// Scroll project view
let workBtn = document.getElementById("workbtn");

workBtn.addEventListener("click", function () {
  alert("PLEASURE TO SHOW MY PROJECTS");
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});

// Input validation
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let submitBtn = document.getElementById("submit");

// Function 1: Validate form
function validateForm() {
  if (nameInput.value === "") {
    alert("Please enter your name");
  } else if (emailInput.value === "") {
    alert("Please enter your email");
  } else {
    success();
  }
}

// Function 2: Success message
function success() {
  alert("Form submitted successfully!");
}

// Event
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});

// Welcome button
let welcomeBtn = document.getElementById("btn");

function showMessage() {
  alert("Welcome to my page");
}

welcomeBtn.addEventListener("click", showMessage);


