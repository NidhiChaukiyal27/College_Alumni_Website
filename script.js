// Function to validate registration form
function validateRegistrationForm() {
    // Get the form fields
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const passoutYear = document.getElementById('passout-year').value;
    const placeOfWork = document.getElementById('place-of-work').value;
    const position = document.getElementById('position').value;

    // Flag to track if there are any errors
    let valid = true;

    // Validate First Name
    if (firstName.trim() === "") {
        document.getElementById('first-name-error').textContent = "First name is required.";
        valid = false;
    } else {
        document.getElementById('first-name-error').textContent = "";
    }

    // Validate Last Name
    if (lastName.trim() === "") {
        document.getElementById('last-name-error').textContent = "Last name is required.";
        valid = false;
    } else {
        document.getElementById('last-name-error').textContent = "";
    }

    // Validate Email
    if (email.trim() === "") {
        document.getElementById('email-error').textContent = "Email is required.";
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById('email-error').textContent = "";
    }

    // Validate Passout Year
    if (passoutYear.trim() === "") {
        document.getElementById('passout-year-error').textContent = "Passout year is required.";
        valid = false;
    } else {
        document.getElementById('passout-year-error').textContent = "";
    }

    // Validate Place of Work
    if (placeOfWork.trim() === "") {
        document.getElementById('place-of-work-error').textContent = "Place of work is required.";
        valid = false;
    } else {
        document.getElementById('place-of-work-error').textContent = "";
    }

    // Validate Position
    if (position.trim() === "") {
        document.getElementById('position-error').textContent = "Position is required.";
        valid = false;
    } else {
        document.getElementById('position-error').textContent = "";
    }

    return valid;
}

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Function to validate login form
function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let valid = true;

    if (email.trim() === "") {
        document.getElementById('login-email-error').textContent = "Email is required.";
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('login-email-error').textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById('login-email-error').textContent = "";
    }

    if (password.trim() === "") {
        document.getElementById('login-password-error').textContent = "Password is required.";
        valid = false;
    } else {
        document.getElementById('login-password-error').textContent = "";
    }

    return valid;
}

// Event listeners for form submission
document.getElementById('registration-form').addEventListener('submit', function (event) {
    if (!validateRegistrationForm()) {
        event.preventDefault();
    }
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    if (!validateLoginForm()) {
        event.preventDefault();
    }
});


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const mobile = document.getElementById("mobile").value;
    const confirmMobile = document.getElementById("confirm-mobile").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (mobile !== confirmMobile) {
        alert("Mobile numbers do not match!");
        return;
    }

    alert("Registration successful!");
    this.reset();
});


document.addEventListener("DOMContentLoaded", () => {
    const passingYearSelect = document.getElementById("passingYear");
    const currentYear = new Date().getFullYear();
    for (let year = 1980; year <= currentYear; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        passingYearSelect.appendChild(option);
    }
});


//get in touch
function sendMail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    const params = { name, email, message };

    emailjs
        .send("service_nel7yue", "template_nhb9xft", params)
        .then(
            () => {
                alert("Email Sent Successfully!");
                document.getElementById("contactForm").reset();
            },
            (error) => {
                alert("Failed to send email: " + JSON.stringify(error));
            });