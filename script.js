document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
  
    // Step 1: Initialize MailJS with your public API key
    mailjs.init('eYjp_YD9y7MUq-vql');
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get the form data
      const formData = new FormData(contactForm);
  
      // Step 2: Send the email using MailJS
      mailjs.send('template_t451dfq', {
        to_name: 'gitaustephen84@gmail.com', // Replace with the recipient's name or email
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
      }).then(function (response) {
        // Email sent successfully, show a success message and optionally clear the form fields
        alert("Message sent successfully!");
        contactForm.reset();
        console.log('Email sent successfully!', response);
      }).catch(function (error) {
        // An error occurred while sending the email, show an error message
        alert("Error sending message. Please try again later.");
        console.error('Error sending email:', error);
      });
    });
  });
  

