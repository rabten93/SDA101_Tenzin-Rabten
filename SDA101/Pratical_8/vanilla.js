const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateUsername() {
  if (username.value.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long";
    username.style.borderColor = "red";
    return false;
  } else {
    usernameError.textContent = "";
    username.style.borderColor = "green";
    return true;
  }
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = "Enter a valid email address";
    email.style.borderColor = "red";
    return false;
  } else {
    emailError.textContent = "";
    email.style.borderColor = "green";
    return true;
  }
}

function validatePassword() {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  if (!regex.test(password.value)) {
    passwordError.textContent =
      "Password must be 8+ chars, include uppercase, lowercase, and special character";
    password.style.borderColor = "red";
    return false;
  } else {
    passwordError.textContent = "";
    password.style.borderColor = "green";
    return true;
  }
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPassword.style.borderColor = "red";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.style.borderColor = "green";
    return true;
  }
}

function checkFormValidity() {
  const isValid =
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword();

  submitBtn.disabled = !isValid;
}

// Attach input event listeners
username.addEventListener("input", () => {
  validateUsername();
  checkFormValidity();
});

email.addEventListener("input", () => {
  validateEmail();
  checkFormValidity();
});

password.addEventListener("input", () => {
  validatePassword();
  checkFormValidity();
});

confirmPassword.addEventListener("input", () => {
  validateConfirmPassword();
  checkFormValidity();
});

// Prevent form submission for demo
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});