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


if (contactForm) {

    // Lab 16 · Task 4: remember a draft (read back on load)
    if (localStorage.getItem("formName"))
        document.querySelector("#name").value = localStorage.getItem("formName");

    if (localStorage.getItem("formEmail"))
        document.querySelector("#email").value = localStorage.getItem("formEmail");

    if (localStorage.getItem("formMessage"))
        document.querySelector("#message").value = localStorage.getItem("formMessage");

    const formStatus = document.querySelector("#form-status");

    // Lab 16 · Task 1: my own check before accepting it
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (message.length < 10) {
            formStatus.textContent = "Please write a bit more, at least 10 characters.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");
        formStatus.textContent = "Thanks, " + name + ". Sending your message.";
        contactForm.submit();
    });

    // Lab 16 · Task 2: clear the error once they start fixing it
    contactForm.addEventListener("input", function () {
        if (formStatus.classList.contains("error")) {
            formStatus.textContent = "";
            formStatus.classList.remove("error");
        }

        // Lab 16 · Task 4: remember a draft (localStorage set on input)
        localStorage.setItem("formName", document.querySelector("#name").value);
        localStorage.setItem("formEmail", document.querySelector("#email").value);
        localStorage.setItem("formMessage", document.querySelector("#message").value);
    });
}