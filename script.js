const form = document.getElementById('myForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const success = document.getElementById('success');

// utility functions
function showError(input, message) {
  const errorElement = document.getElementById(`${input.id}-error`);
  input.classList.remove("valid");
  input.style.borderColor = 'red';
  errorElement.textContent = message;
}

function clearError(input) {
  const errorElement = document.getElementById(`${input.id}-error`);
  input.classList.add("valid");
  input.style.borderColor = 'green';
  errorElement.textContent = '';
}

//validation functions
function validateEmail() {
  if (!email.value.includes('@')) {
    showError(email, "Please enter a valid email.");
    return false;
  }
  clearError(email);
  return true;
}

function validateCountry() {
  if (country.value.trim() === '') {
    showError(country, "Country is required.");
    return false;
  }
  clearError(country);
  return true;
}

function validatePostalCode() {
  if (!/^\d{4,6}$/.test(postal.value)) {
    showError(postal, "Enter a valid postal code.");
    return false;
  }
  clearError(postal);
  return true;
}

function validatePassword() {
  if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters.");
    return false;
  }
  clearError(password);
  return true;
}

function validateConfirmPassword() {
  if (password.value !== confirm.value) {
    showError(confirm, "Passwords do not match.");
    return false;
  }
  clearError(confirm);
  return true;
}

// live inline validation
email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
postal.addEventListener('input', validatePostalCode);
password.addEventListener('input', validatePassword);
confirm.addEventListener('input', validateConfirmPassword);

//form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const isValid =
    validateEmail() &&
    validateCountry() &&
    validatePostalCode() &&
    validatePassword() &&
    validateConfirmPassword();

  if (isValid) {
    success.textContent = "🖐 High five! Form is good.";
    success.style.color = 'green';
  } else {
    success.textContent = "Please fix the errors above.";
    success.style.color = 'red';
  }
});
