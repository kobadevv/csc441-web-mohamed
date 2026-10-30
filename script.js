// Class 15 - Step 1: this file is running
console.log("script.js is running");

// Class 15 - Step 2: put this year in the footer
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15 - Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");
if (themeButton) {
    // Lab 15 · Task 4: use the saved choice on arrival
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        themeButton.textContent = "Dark";
    }
    // Lab 15 · Task 3: the button says what it will do
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light");
        if (document.body.classList.contains("light")) {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light");
        } else {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        }
    });
}

// Lab 15 - Step 5: one more thing that reacts (dynamic greeting!)
const currTime = new Date().getHours();

const greeting = document.getElementById("greeting");

if (currTime < 12) {
    greeting.textContent = "Good Morning!";
} else if (currTime < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}

// Class 16 - Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("Submit", function(event) {
    event.preventDefault()

    const name = document.querySelector("#name").value;

    formStatus.textContent = "Thanks,", name + ". Your message is to send.";
    contactForm.reset();
});
