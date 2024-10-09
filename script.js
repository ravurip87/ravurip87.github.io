
// JavaScript for handling the contact form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset(); // Clear the form fields
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
