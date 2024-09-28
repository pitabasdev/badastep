// document.addEventListener("DOMContentLoaded", function () {
//   // Select the form using its class
//   const loginForm = document.querySelector(".contact-bx");

//   // Add event listener to handle form submission
//   loginForm.addEventListener("submit", function (event) {
//     // Prevent the default form submission
//     event.preventDefault();

//     // Get the values of the input fields
//     const userName = document.querySelector('input[name="dzName"]').value;
//     const password = document.querySelector('input[name="dzPassword"]').value;
//     const rememberMe = document.querySelector(
//       "#customControlAutosizing"
//     ).checked;

//     // Create an object to hold the form data
//     const formData = {
//       name: userName,
//       password: password,
//       remember: rememberMe,
//     };

//     // Log the form data to the console
//     alert("Login Data:", formData);
//     document.write(formData);

//     // Here, you can make an API call or perform further actions
//     // Example of sending data to a backend server (uncomment and modify as needed)
//     // fetch('YOUR_SERVER_ENDPOINT', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(formData),
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   console.log('Success:', data);
//     // })
//     // .catch((error) => {
//     //   console.error('Error:', error);
//     // });

//     // Optionally, show a message or redirect the user upon successful login
//   });
// });

