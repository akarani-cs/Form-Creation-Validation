document.addEventListener("DOMContentLoaded", function(){


const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event){
        event.preventDefault();//Prevent automatic form submission.
        

        // Get the form and feedback elements
        const formElement = document.getElementById('registration-form');
        const feedbackDiv = document.getElementById('form-feedback');
    

        //Username pick
        const usernameInput = document.getElementById('username').value.trim();
        const usernameError = document.getElementById('usernameError');

        // email pick
        const emailInput = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');

        //password pick
        const passwordInput = document.getElementById('password').value.trim();
        const passwordError = document.getElementById('passwordError');

        let isValid = true;
        let messages = [];

   
        // username validation
        if (usernameInput.length < 3) {
            isValid = false;
            usernameError.textContent = 'Username must be at least 3 characters long';
        } else {
            usernameError.textContent = '';
        }

        // email validation
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput)) {
            isValid = false;
            emailError.textContent = 'please enter a valid email address';
        }else {
            emailError.textContent = '';
        }

        // Password validation
        if (passwordInput.length < 8) {
            isValid = false;
            passwordError.textContent = 'Password must be at least 8 characters long';
        } else {
            passwordError.textContent = '';
        }
        
        messages.push(error);


    
        // If the form is valid, submit it
        if (isValid) {
            // Clear any previous feedback
            feedbackDiv.textContent = '';
            feedbackDiv.className = 'Registration Successful!';
            feedbackDiv.color ='#28a745'; // Green color for success feedback
            feedbackDiv.style.display = 'block';

        if  (isValid ===false){
            // Show error messages
            feedbackDiv.textContent = messages.join(' ')
            feedbackDiv.className = 'error';
            feedbackDiv.style.display = 'block';
          }

            // Simulate form submission
            setTimeout(function() {
                feedbackDiv.textContent = 'Registration Successful!';
                feedbackDiv.className = 'success';
                formElement.reset(); // Reset the form
            }, 1000); // Simulate a delay for submission
        } else {
            // Show error messages
            feedbackDiv.textContent = 'Please fix the errors in the form.';
            feedbackDiv.className = 'error';
        }







    //submit event listener.    
    });













//for the content loader.
});
