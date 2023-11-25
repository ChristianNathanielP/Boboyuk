document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get values from the form fields
      var phoneNumber = document.querySelector('input[type="tel"]').value;
      var password = document.querySelector('input[type="password"]').value;
  
      // You can perform further validation here if needed
  
      // Example: Display values in the console
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
  
      // Add your logic for handling the login here, e.g., sending a request to a server for authentication
    }
  
    // Attach the form submission handler to the form
    var form = document.querySelector('.form-2');
    form.addEventListener('submit', handleFormSubmission);
  });
  