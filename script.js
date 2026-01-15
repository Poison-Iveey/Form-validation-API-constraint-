/*
// Validation functions (logic only)
export function validateEmail(emailValue) {
  if (!emailValue.includes('@')) return false;
  return true;
}

export function validatePassword(passwordValue) {
  return passwordValue.length >= 8;
}

// DOM wiring — run only in browser
export function initForm() {
  const email = document.getElementById('email');
  const country = document.getElementById('country');
  const postal = document.getElementById('postal');
  const password = document.getElementById('password');
  const confirm = document.getElementById('confirm');
  const success = document.getElementById('success');
  const form = document.getElementById('myForm');

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

  function validateEmailInput() { 
    if (!validateEmail(email.value)) { showError(email,"Please enter valid email"); return false;} 
    clearError(email); return true; 
  }

  function validatePasswordInput() { 
    if (!validatePassword(password.value)) { showError(password,"Password too short"); return false;} 
    clearError(password); return true; 
  }

  // Live validation
  email.addEventListener('input', validateEmailInput);
  password.addEventListener('input', validatePasswordInput);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const isValid = validateEmailInput() && validatePasswordInput();
    if (isValid) {
      success.textContent = "🖐 High five! Form is good.";
      success.style.color = 'green';
    } else {
      success.textContent = "Please fix the errors above.";
      success.style.color = 'red';
    }
  });
}

// Run initForm only in browser AND not during Jest tests
if (typeof document !== "undefined" && !process.env.JEST_WORKER_ID) {
  initForm();
}
*/


const form = document.getElementById('myForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const success = document.getElementById('success');

// Utility functions
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

// Validation functions
function validateEmail() {
  const value = email.value.trim();
  if (!value.includes('@') || value.startsWith('@') || value.endsWith('@')) {
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
  const value = postal.value.trim();
  if (!/^\d{4,6}$/.test(value)) {
    showError(postal, "Enter a valid postal code (4-6 digits).");
    return false;
  }
  clearError(postal);
  return true;
}

function validatePassword() {
  if (password.value.trim().length < 8) {
    showError(password, "Password must be at least 8 characters.");
    return false;
  }
  clearError(password);
  return true;
}

function validateConfirmPassword() {
  if (password.value.trim() !== confirm.value.trim()) {
    showError(confirm, "Passwords do not match.");
    return false;
  }
  clearError(confirm);
  return true;
}

// Live inline validation
[email, country, postal, password, confirm].forEach(input => {
  input.addEventListener('input', () => {
    switch(input.id) {
      case 'email': validateEmail(); break;
      case 'country': validateCountry(); break;
      case 'postal': validatePostalCode(); break;
      case 'password': validatePassword(); break;
      case 'confirm': validateConfirmPassword(); break;
    }
  });
});

// Form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const isValid =
    validateEmail() &&
    validateCountry() &&
    validatePostalCode() &&
    validatePassword() &&
    validateConfirmPassword();

  if (isValid) {
    success.textContent = "High five! Form is good.";
    success.style.color = 'green';
    form.reset();
    [email, country, postal, password, confirm].forEach(input => input.style.borderColor = '');
  } else {
    success.textContent = "Please fix the errors above.";
    success.style.color = 'red';
  }
});
