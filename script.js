const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const emailInput = document.getElementById("email");
const categoryInput = document.getElementById("category");
const messageInput = document.getElementById("message");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("departmentError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("categoryError").textContent = "";
    document.getElementById("messageError").textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {

        document.getElementById("nameError").textContent =
            "Please enter your name.";

        isValid = false;
    }

    if (departmentInput.value === "") {

        document.getElementById("departmentError").textContent =
            "Please select your department.";

        isValid = false;
    }

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    if (categoryInput.value === "") {

        document.getElementById("categoryError").textContent =
            "Please select an issue category.";

        isValid = false;
    }

    const message = messageInput.value.trim();

    if (message === "") {

        document.getElementById("messageError").textContent =
            "Please describe the issue.";

        isValid = false;

    } else if (message.length < 10) {

        document.getElementById("messageError").textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }

    if (isValid) {

        successMessage.textContent =
            "Your workplace contact request was submitted successfully.";

        console.log("Form submitted successfully.");

        contactForm.reset();
    }

});