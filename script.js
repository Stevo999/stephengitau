<script>
  mailjs.init('eYjp_YD9y7MUq-vql');
</script>

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the form data
        const formData = new FormData(contactForm);

        // Send the form data to the server-side script for processing
        sendFormData(formData);
    });
});

function sendFormData(formData) {
    // Replace "submit_contact_form.php" with the URL of your server-side script that handles form submission
    const url = "submit_contact_form.php";

    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            // Optionally, you can clear the form fields after successful submission
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
