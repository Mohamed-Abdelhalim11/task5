document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("password-error");

  // Clear previous error
  errorMessage.style.display = "none";
  errorMessage.textContent = "";

  // Validation for empty fields
  if (!username || !password) {
    alert("Both username and password fields are required.");
    return;
  }

  // Validation for password length
  if (password.length < 8) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Password must be at least 8 characters long.";
    return;
  }

  // If validations pass
  alert(`Welcome, ${username}!`);
});
