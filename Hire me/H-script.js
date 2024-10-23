document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

        // Basic email validation
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            alert('Please enter a valid email address.');
            return;
        }

            // Ensure all fields are filled
    if (!name || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Create the mailto link
    const mailtoLink = `mailto:nazikmohamed21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open the email client
    window.location.href = mailtoLink;

        // Clear the form
        document.getElementById('contactForm').reset();

        // Show a confirmation message
        alert('Thank you! Your message will be opened in your email client.');
});

