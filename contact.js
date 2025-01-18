document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector("button");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    setTimeout(() => {
        alert("Your message has been sent!");
        event.target.reset();
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
    }, 2000);
});
