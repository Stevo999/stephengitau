document.addEventListener("DOMContentLoaded", function() {
    // Add the code for the form submission functionality here

    const minimizeButton = document.querySelector(".minimize-btn");
    const navList = document.querySelector("nav ul");

    minimizeButton.addEventListener("click", function() {
        navList.classList.toggle("minimized");
    });
});

function sendFormData(formData) {
    const url = "submit_contact_form.php";

    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            const contactForm = document.getElementById("contactForm");
            contactForm.reset();
        } else {
            alert("Error sending message. Please try again later.");
        }
    })
    .catch(error => {
        alert("Error sending message. Please try again later.");
        console.error("Error:", error);
    });
}
