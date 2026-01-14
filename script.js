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

