function showSurvey(event) {
    event.preventDefault(); // Prevent form submission for now

    console.log('Function called'); // Log to check if the function is being called
    var email = document.getElementById('accessEmail').value;

    // Basic email validation
    if (/^\S+@\S+\.\S+$/.test(email)) {
        console.log('Valid email'); // Log if email is valid
        localStorage.setItem('userEmail', email);
        window.location.href = 'survey form.html'; // Redirect to the survey form
    } else {
        console.log('Invalid email'); // Log if email is invalid
        alert('Please enter a valid email address.');
    }
}


// Function to handle survey form submission
function submitSurvey(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the user's email from local storage
    var userEmail = localStorage.getItem('userEmail');

    // Create a message to display
    var message = "Thanks! Your response has been submitted. Your email: " + userEmail;

    // Display the message
    alert(message);
}

// On the survey page, retrieve and display the entered email
var userEmail = localStorage.getItem('userEmail');
if (userEmail) {
    document.getElementById('userEmail').textContent = userEmail;
}
