const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorSpans = document.querySelectorAll('.error');

let errors = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(validateInputs());
  if (validateInputs() === 0) {
    form.classList.remove('invalid');
    console.log('submitted');
    form.reset();
  } else {
    form.classList.add('invalid');
  }
});

function validateInputs() {
  if (nameInput.value === '') {
    nameInput.parentElement.classList.add('invalid');
    errors++;
  } else {
    nameInput.parentElement.classList.remove('invalid');
    if (errors > 0) errors--;
  }

  if (messageInput.value === '') {
    messageInput.parentElement.classList.add('invalid');
    errors++;
  } else {
    messageInput.parentElement.classList.remove('invalid');
    if (errors > 0) errors--;
  }

  if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
    emailInput.parentElement.classList.add('invalid');
    errors++;
  } else {
    emailInput.parentElement.classList.remove('invalid');
    if (errors > 0) errors--;
  }

  return errors;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
