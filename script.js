document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
});
