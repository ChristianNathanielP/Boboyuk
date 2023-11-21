// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form fields
    var firstName = document.querySelector('input[name="firstName"]').value;
    var lastName = document.querySelector('input[name="lastName"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    // You can perform further validation here if needed

    // Example: Display values in the console
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Add your logic for handling the login here, e.g., sending a request to a server for authentication
  }

  // Attach the form submission handler to the form
  var form = document.querySelector('.form');
  form.addEventListener('submit', handleFormSubmission);
});
