function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var isValid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    if (message === "") {
        document.getElementById("messageError").innerHTML = "Enter any message.";
        isValid = false;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }

    if (isValid) {
        displayFormData(name, email, phone, message);
    }

    return false; // Prevent form submission
}

function displayFormData(name, email, phone, message) {
    var formDataDisplay = document.getElementById("formDataDisplay");
    formDataDisplay.innerHTML = "<h2>Submitted Data:</h2>";
    formDataDisplay.innerHTML += "<p>Name: " + name + "</p>";
    formDataDisplay.innerHTML += "<p>Email: " + email + "</p>";
    formDataDisplay.innerHTML += "<p>Phone: " + phone + "</p>";
    formDataDisplay.innerHTML += "<p>Message: " + message + "</p>";
}