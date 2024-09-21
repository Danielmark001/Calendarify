// Basic interactivity for the form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert(`Thank you for signing up with ${email}!`);
    } else {
        alert('Please enter a valid email address.');
    }
});
