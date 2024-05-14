function showSurvey(event) {
    event.preventDefault(); 

    console.log('Function called'); 
    var email = document.getElementById('accessEmail').value;

    if (/^\S+@\S+\.\S+$/.test(email)) {
        console.log('Valid email'); // Log if email is valid
        localStorage.setItem('userEmail', email);
        window.location.href = 'survey form.html'; // Redirect to the survey form
    } else {
        console.log('Invalid email'); // Log if email is invalid
        alert('Please enter a valid email address.');
    }
}

function submitSurvey(event) {
    
    event.preventDefault();
    var userEmail = localStorage.getItem('userEmail');
    var message = "Thanks! Your response has been submitted. Your email: " + userEmail;

    alert(message);
}

var userEmail = localStorage.getItem('userEmail');
if (userEmail) {
    document.getElementById('userEmail').textContent = userEmail;
}
    
    
          
     
     
     
          
     
      
     
     
      
    
